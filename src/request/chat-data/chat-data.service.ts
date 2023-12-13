import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"

@Injectable()
export class ChatDataService {
	constructor(private dbService: DbService) {}

	async create(chatDataCreateInput: Prisma.chatDataCreateInput) {
		return await this.dbService.chatData.create({
			data: chatDataCreateInput
		})
	}

	async findLastByChat(group: bigint) {
		return await this.dbService.chatData.findMany({
			where: {
				group
			},
			orderBy: {
				id: "desc"
			},
			take: 1
		})
	}

	async findByPollId(poll_id: string) {
		return await this.dbService.chatData.findMany({
			where: {
				poll_id
			}
		})
	}

	async findAllByChat(group: bigint) {
		return await this.dbService.chatData.findMany({
			select: {
				question_id: true
			},
			where: {
				group
			}
		})
	}

	async findLastTwoByChat(group: bigint) {
		return await this.dbService.chatData.findMany({
			where: {
				group
			},
			orderBy: {
				id: "desc"
			},
			take: 2
		})
	}
}