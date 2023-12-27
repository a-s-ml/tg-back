import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"

@Injectable()
export class AnswerService {
	constructor(private dbService: DbService) {}

	async create(createAnswerDto: Prisma.answerCreateInput) {
		return await this.dbService.answer.create({ data: createAnswerDto })
	}

	async findAll() {
		return await this.dbService.answer.findMany({})
	}

	async countByChatId(chat: bigint) {
		return await this.dbService.answer.count({
			where: {
				chat: chat
			}
		})
	}

	async findByChat(chat: bigint, question: number, group: bigint) {
		return await this.dbService.answer.findMany({
			where: {
				chat,
				question,
				group
			}
		})
	}

	async getStatChat(group: bigint) {
		const date = new Date()
		const gte = date.setFullYear(
			new Date().getFullYear(),
			new Date().getMonth(),
			1
		)

		return await this.dbService.answer.groupBy({
			by: ["chat"],
			where: {
				group,
				date: {
					gte: new Date(gte),
					lte: new Date()
				}
			},
			_sum: {
				reward: true
			},
			_count: {
				id: true
			},
			orderBy: {
				_sum: {
					reward: "desc"
				}
			},
			take: 15
		})
	}

	async update(id: number, updateAnswerDto: Prisma.answerUpdateInput) {
		return await this.dbService.answer.update({
			where: {
				id
			},
			data: updateAnswerDto
		})
	}

	async remove(id: number) {
		return await this.dbService.answer.delete({
			where: {
				id
			}
		})
	}
}
