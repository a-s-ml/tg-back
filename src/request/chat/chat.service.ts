import { Injectable } from "@nestjs/common"
import { EventEmitter2 } from "@nestjs/event-emitter"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"
import { ChatInterface } from "src/interfaces/types/Chat.interface"
import { UserInterface } from "src/interfaces/types/User.interface"
import { GetTgService } from "src/responses/getTgAPI.service"
import { ResponsesService } from "src/responses/responses.service"

@Injectable()
export class ChatService {
	constructor(
		private dbService: DbService,
		private getTgService: GetTgService,
		private responsesService: ResponsesService,
		private eventEmitter: EventEmitter2
	) {}

	async createChat(createChatDto: Prisma.chatCreateInput) {
		return await this.dbService.chat.create({ data: createChatDto })
	}

	async createGroup(createChatDto: Prisma.chatCreateInput) {
		return await this.dbService.chat.create({ data: createChatDto })
	}

	async findById(id: number) {
		return await this.dbService.chat.findUnique({
			where: {
				id
			}
		})
	}

	async clean() {
		const max = await this.dbService.chat.findMany()
		for (var key in max) {
			const res = await this.responsesService.sendChatAction(max[key].chat, "typing")
			if(res.ok === true) {
				console.log(key+'true')
			} 
			if(res.ok === false) {
				console.log(key+'false')
				await this.removeByChat(max[key].chat)
			} 
		}
	}

	async findByChatId(chat: bigint) {
		return await this.dbService.chat.findUnique({
			where: {
				chat
			}
		})
	}

	async findByReferal(chat: bigint) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chat.findMany({
					where: {
						referral: chat
					}
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}

	async countByReferal(chat: bigint) {
		return await this.dbService.chat.count({
			where: {
				referral: chat
			}
		})
	}

	async update(chat: bigint, updateChatDto: Prisma.chatUpdateInput) {
		await this.dbService.chat.update({
			where: {
				chat
			},
			data: updateChatDto
		})
	}

	async verificationExistence(from: UserInterface) {
		const checkUser = await this.findByChatId(from.id)
		if (!checkUser) {
			await this.createChat({
				chat: from.id,
				bot: from.is_bot ? 1 : 0
			})
			await this.eventEmitter.emitAsync(
				"newChatMember.chatMember",
				`new_user: ${from.id}\nfirst_name: ${from.first_name}\nlast_name: ${from.last_name}\nusername @${from.username}`
			)
		}
	}

	async verificationExistenceChat(chat: ChatInterface, from: UserInterface) {
		const checkChat = await this.findByChatId(chat.id)
		if (!checkChat) {
			await this.createGroup({
				chat: chat.id,
				type: chat.type,
				referral: from.id,
				bot: chat.type ? 1 : 0
			})
			const memberCount = await this.getTgService.tgGetChatMemberCount(
				chat.id
			)
			await this.eventEmitter.emitAsync(
				"newChatMember.chatMember",
				`new_chat: ${chat.id}\ntitle: ${chat.title}\nusername: ${
					chat.username
				}\nbio: ${chat.bio}\ndescription: ${chat.description}\ntype: ${
					chat.type
				}\nwho: ${from.id}\nmember_count: ${JSON.stringify(
					memberCount
				)}`
			)
		}
	}

	async groupInfoById(chat: bigint) {
		return await this.getTgService.tgGetChat(chat)
	}

	async groupMemberCountById(chat: bigint) {
		return await this.getTgService.tgGetChatMemberCount(chat)
	}
	
	async tgGetFilePhoto(unic_id: string) {
		return await this.getTgService.tgGetFilePhoto(unic_id)
	}	

	async removeByChat(chat_id: bigint) {
		return await this.dbService.chat.delete({
			where: {
				chat: chat_id
			}
		})
	}

	async removeById(id: number) {
		return await this.dbService.chat.delete({
			where: {
				id
			}
		})
	}
}
