import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"

@Injectable()
export class ChatCategoryService {
	constructor(private dbService: DbService) {}

	async create(chatCategoryCreateInput: Prisma.chatCategoryCreateInput) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chatCategory.create({
					data: chatCategoryCreateInput
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
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

	async findIdByChat(chat: bigint, category: number) {
		return await this.dbService.chatCategory.findFirst({
			select: {
				id: true,
			},
			where: {
				chat,
				category
			}
		})
	}

	async remove(deleteChatCategoryDto: Prisma.chatCategoryCreateInput) {
		const row = await this.findIdByChat(deleteChatCategoryDto.chat as bigint, deleteChatCategoryDto.category)
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chatCategory.delete({
					where: {
						id: row.id
					}
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}
}
