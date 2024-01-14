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
				id: true,
				category: true
			},
			where: {
				chat
			}
		})
	}

	async remove(id: number) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chatCategory.delete({
					where: {
						id
					}
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}
}
