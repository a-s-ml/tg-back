import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"

@Injectable()
export class ChatCategoryService {
	constructor(private dbService: DbService) {}

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
}
