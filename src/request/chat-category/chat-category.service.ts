import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"
import { ChatService } from "../chat/chat.service"

@Injectable()
export class ChatCategoryService {
	constructor(
		private dbService: DbService,
		private chatService: ChatService
	) {}

	async create(chatCategoryCreateInput: Prisma.chatCategoryCreateInput) {
		return await this.dbService.chatCategory.create({
			data: chatCategoryCreateInput
		})
	}

	async findChat(chat: bigint) {
		return await this.dbService.chatCategory.findMany({
			select: {
				category: true
			},
			where: {
				chat
			}
		})
	}

	async clean() {
		const max = await this.dbService.chatCategory.findMany()
		for (var key in max) {
			const res = await this.chatService.findByChatId(
				max[key].chat
			)
			if (res) {
				console.log(max[key].chat + "true")
			}
			if (!res) {
				console.log(max[key].chat + "false")
				// await this.removeByChat(max[key].chat)
			}
		}
	}

	async remove(id: number) {
		return await this.dbService.chatCategory.delete({
			where: {
				id
			}
		})
	}
}
