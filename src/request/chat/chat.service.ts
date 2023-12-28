import { Injectable } from "@nestjs/common"
import { EventEmitter2 } from "@nestjs/event-emitter"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"
import { ChatInterface } from "src/interfaces/types/Chat.interface"
import { UserInterface } from "src/interfaces/types/User.interface"
import { GetTgService } from "src/responses/getTgAPI.service"

@Injectable()
export class ChatService {
	constructor(
		private dbService: DbService,
		private getTgService: GetTgService,
		private eventEmitter: EventEmitter2
	) {}

	async createChat(createChatDto: Prisma.chatCreateInput) {
		return await this.dbService.chat.create({ data: createChatDto })
	}

	async createGroup(createChatDto: Prisma.chatCreateInput) {
		return await this.dbService.chat.create({ data: createChatDto })
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
	
}
