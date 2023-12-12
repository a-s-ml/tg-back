import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"
import { ChatInterface } from "src/interfaces/types/Chat.interface"
import { UserInterface } from "src/interfaces/types/User.interface"
import { GetTgService } from "src/responses/getTG.service"
import { ResponsesService } from "src/responses/responses.service"

@Injectable()
export class ChatService {
	constructor(
		private dbService: DbService,
		private responsesService: ResponsesService,		
		private getTgService: GetTgService
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
			await this.responsesService.sendLogToAdmin(`new_user: ${from.id}\nfirst_name: ${from.first_name}\nlast_name: ${from.last_name}\nusername @${from.username}`)
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
			const memberCount = await this.getTgService.tgGetChatMemberCount(chat.id)
			await this.responsesService.sendLogToAdmin(`new_chat: ${chat.id}\ntitle: ${chat.title}\nusername: ${chat.username}\nbio: ${chat.bio}\ndescription: ${chat.description}\ntype: ${chat.type}\nwho: ${from.id}\nmember_count: ${memberCount}`)
		}
	}
}
