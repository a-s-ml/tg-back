import { Injectable } from "@nestjs/common"
import { DbService } from "src/db/db.service"
import { ChatCategoryService } from "src/request/chat-category/chat-category.service"
import { ChatDataService } from "src/request/chat-data/chat-data.service"

@Injectable()
export class SelectQuestionService {
	constructor(
		private dbService: DbService,
		private chatCategoryService: ChatCategoryService,
		private chatDataService: ChatDataService
	) {}

	async availableQuestion(chatid: bigint) {
		const forbiddenCategory =
			await this.chatCategoryService.findChat(chatid)
		const publishedQuestion =
			await this.chatDataService.findAllByChat(chatid)
		// КОСТЫЛЬ
		if (!forbiddenCategory?.length) {
			forbiddenCategory.push({ category: 1001 })
		}
		if (!publishedQuestion?.length) {
			publishedQuestion.push({ question_id: 1 })
		}
		// КОСТЫЛЬ
		const questions = await this.dbService.question.findMany({
			select: {
				id: true
			},
			where: {
				category: {
					notIn: forbiddenCategory.map(item => item.category)
				},
				id: {
					notIn: publishedQuestion.map(item => item.question_id)
				},
				mod: 2,
				isactual: 2
			}
		})
		if (questions?.length) {
			const randomIndex = Math.floor(
				Math.random() * (questions.length - 1)
			)
			return questions[randomIndex]
		}
	}

	async countAvailableQuestionByChatId(chatid: bigint) {
		const forbiddenCategory =
			await this.chatCategoryService.findChat(chatid)
		const publishedQuestion =
			await this.chatDataService.findAllByChat(chatid)
		forbiddenCategory.push({ category: 1001 })
		const countQuestions = await this.dbService.question.count({
			where: {
				category: {
					notIn: forbiddenCategory.map(item => item.category)
				},
				id: {
					notIn: publishedQuestion.map(item => item.question_id)
				},
				mod: 2,
				isactual: 2
			}
		})
		return countQuestions
	}

	async countPublishedQuestion(chatid: bigint) {
		return this.chatDataService.countAllByChat(chatid)
	}
}
