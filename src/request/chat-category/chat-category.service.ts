import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"
import { ChatService } from "../chat/chat.service"
import { CategoryService } from "../category/category.service"

@Injectable()
export class ChatCategoryService {
	constructor(
		private dbService: DbService,
		private chatService: ChatService,
		private categoryService: CategoryService
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
			const res = await this.categoryService.findOne(
				max[key].category
			)
			if (res) {
				console.log(max[key].category + "true")
			}
			if (!res) {
				console.log(max[key].category + "false")
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
