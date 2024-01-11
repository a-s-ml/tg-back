import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"
import { ResponsesService } from "src/responses/responses.service"

@Injectable()
export class ChatCategoryService {
	constructor(
		private dbService: DbService,
		private responsesService: ResponsesService
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

	async remove(id: number) {
		return await this.dbService.chatCategory.delete({
			where: {
				id
			}
		})
	}

	async clean() {
		const max = await this.dbService.chatCategory.findMany()
		for (var key in max) {
			console.log(max[key])
			const res = await this.responsesService.sendChatAction(
				max[key].chat,
				"typing"
			)
			if (res.ok === true) {
				console.log(max[key].chat + "true")
			}
			if (res.ok === false) {
				console.log(max[key].chat + "false")
				await this.remove(max[key].id)
			}
		}
	}
}
