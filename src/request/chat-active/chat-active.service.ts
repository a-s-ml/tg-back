import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"
import { ChatService } from "../chat/chat.service"

@Injectable()
export class ChatActiveService {
	constructor(
		private dbService: DbService,
		private chatService: ChatService
	) {}

	async create(chatActiveCreateInput: Prisma.chatActiveCreateInput) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chatActive.create({
					data: chatActiveCreateInput
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}

	async findAll() {
		return await this.dbService.chatActive.findMany()
	}

	async findOne(chat: bigint) {
		const isActive = await this.dbService.chatActive.findUnique({
			where: {
				chat
			}
		})
		if (!isActive) {
			return false
		}
		if (isActive) {
			return true
		}
	}

	async countActiveByReferal(chat: bigint) {
		const all = await this.chatService.findByReferal(chat)
		return await this.dbService.chatActive.count({
			where: {
				chat: {
					in: all.map((item: { id: number }) => item.id)
				}
			}
		})
	}

	async remove(chat: bigint) {
		return await this.dbService.chatActive.delete({
			where: {
				chat
			}
		})
	}
}
