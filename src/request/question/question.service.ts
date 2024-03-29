import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"

@Injectable()
export class QuestionService {
	constructor(private dbService: DbService) {}

	async create(createQuestionDto: Prisma.questionCreateInput) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.question.create({
					data: createQuestionDto
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}

	async findAll() {
		return await this.dbService.question.findMany({})
	}

	async findOne(id: number) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.question.findUnique({
					where: {
						id
					}
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}

	async findByChatId(chat: bigint) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.question.findMany({
					where: {
						chat
					}
				}),
				(key, value) =>
					typeof value === "bigint" ? value.toString() : value
			)
		)
	}

	async findOneAnswers(id: number) {
		return await this.dbService.question.findUnique({
			select: {
				answer1: true,
				answer2: true,
				answer3: true,
				answer4: true
			},
			where: {
				id
			}
		})
	}

	async update(id: number, updateQuestionDto: Prisma.questionUpdateInput) {
		return await this.dbService.question.update({
			where: {
				id
			},
			data: updateQuestionDto
		})
	}

	async remove(id: number) {
		return await this.dbService.question.delete({
			where: {
				id
			}
		})
	}

	async countByChatId(chat: bigint) {
		return await this.dbService.question.count({
			where: {
				chat: chat
			}
		})
	}

	async countModerateByChatId(chat: bigint) {
		return await this.dbService.question.count({
			where: {
				chat: chat,
				mod: {
					gt: 0
				}
			}
		})
	}

	async countReward(question: number) {
		const count = await this.dbService.answer.count({
			where: {
				question
			}
		})
		const inc = await this.dbService.answer.count({
			where: {
				question,
				reward: {
					gt: 0
				}
			}
		})
		return 100 - Math.round((inc / count) * 100)
	}

	async count(question: number) {
		return await this.dbService.answer.count({
			where: {
				question
			}
		})
	}

	// async generate(id: number) {
	// 	console.log(id)
	// 	const question = await this.findAll()
	// 	for (var key in question) {
	// 		let count = await this.countReward(question[key].id)
	// 		if (!Number.isInteger(count)) {
	// 			count = 100
	// 		}
	// 		await this.update(question[key].id, { reward: count })
	// 		console.log(question[key].id + " - " + count)
	// 	}
	// }
}
