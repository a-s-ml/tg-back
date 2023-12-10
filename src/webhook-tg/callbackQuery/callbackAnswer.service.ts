import { Injectable } from "@nestjs/common"
import { AnswerService } from "src/request/answer/answer.service"
import { CallbackQueryDto } from "../dto/callbackQuery.dto"
import { QuestionService } from "src/request/question/question.service"
import { ResponsesService } from "src/responses/responses.service"
import { ChatService } from "src/request/chat/chat.service"

@Injectable()
export class CallbackAnswerService {
	constructor(
		private answerService: AnswerService,
		private questionService: QuestionService,
		private responsesService: ResponsesService,
		private chatService: ChatService
	) {}

	async answer(callbackQuery: CallbackQueryDto) {
		console.log(callbackQuery)
		const data = callbackQuery.data.split("_")
		await this.chatService.verificationExistence(callbackQuery.from)
		const checkAnswer = await this.answerService.findByChat(
			callbackQuery.from.id,
			+data[1],
			callbackQuery.message.chat.id
		)
		let text: string
		let reward: number
		if (checkAnswer.length == 0) {
			//лог
			await this.responsesService.sendLogToAdmin(
				`new_answer answer:\n${callbackQuery.from.id}\n${callbackQuery.from.first_name} ${callbackQuery.from.username}`
			)
			//
			const question = await this.questionService.findOne(+data[1])
			if ((data[2] as unknown as number) == question.answerright) {
				reward = question.reward
				text = `Верно! \n\nДобавлено "${question.reward}" очков`
			} else {
				reward = -question.reward
				text = `Не верно! \n\nВычтено "${question.reward}" очков`
			}
			await this.answerService.create({
				chat: callbackQuery.from.id,
				question: +data[1],
				group: callbackQuery.message.chat.id,
				choice: +data[2],
				reward: reward
			})
		} else {
			text = `Вы уже двали ответ на этот вопрос!`
		}
		const res = {
			callback_query_id: callbackQuery.id,
			text: encodeURI(text)
		}
		await this.responsesService.answerCallbackQuery(res)
	}
}
