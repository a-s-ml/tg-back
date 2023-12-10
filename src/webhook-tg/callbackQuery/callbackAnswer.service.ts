import { Injectable } from "@nestjs/common"
import { AnswerService } from "src/request/answer/answer.service"
import { CallbackQueryDto } from "../dto/callbackQuery.dto"
import { QuestionService } from "src/request/question/question.service"
import { ResponsesService } from "src/responses/responses.service"
import { ChatService } from "src/request/chat/chat.service"
import { PollAnswerDto } from "../dto/pollAnswer.dto"
import { ChatDataService } from "src/request/chat-data/chat-data.service"
import { UserDto } from "../dto/user.dto"
import { ChatDto } from "../dto/Chat.dto"

@Injectable()
export class CallbackAnswerService {
	constructor(
		private answerService: AnswerService,
		private questionService: QuestionService,
		private responsesService: ResponsesService,
		private chatService: ChatService,
		private chatDataService: ChatDataService
	) {}

	async answerCheck(chat: UserDto, group: bigint, answer: number, question_id: number) {
		const checkAnswer = await this.answerService.findByChat(
			chat.id,
			question_id,
			group
		)
		let text: string
		let reward: number
		if (checkAnswer.length == 0) {
			const question = await this.questionService.findOne(question_id)
			if ((answer) == question.answerright) {
				reward = question.reward
				text = `Верно! \n\nДобавлено "${question.reward}" очков`
			} else {
				reward = -question.reward
				text = `Не верно! \n\nВычтено "${question.reward}" очков`
			}
			await this.answerService.create({
				chat: chat.id,
				question: question_id,
				group: group,
				choice: answer,
				reward: reward
			})
		} else {
			text = `Вы уже двали ответ на этот вопрос!`
		}
		return text
	}


	async answer(callbackQuery: CallbackQueryDto) {
		const data = callbackQuery.data.split("_")
		await this.chatService.verificationExistence(callbackQuery.from)
		const text = await this.answerCheck(callbackQuery.from,callbackQuery.message.chat.id, +data[2], +data[1])
		const res = {
			callback_query_id: callbackQuery.id,
			text: encodeURI(text)
		}
		await this.responsesService.answerCallbackQuery(res)
	}

	async pollAnswer(pollAnswer: PollAnswerDto) {
		if (pollAnswer.user) {
			await this.chatService.verificationExistence(pollAnswer.user)
			const question = await this.chatDataService.findByPollId(pollAnswer.poll_id)
			if(question) {
				await this.answerCheck(pollAnswer.user,question[0].group, pollAnswer.option_ids[0], question[0].question_id)
			}
		}
	}
}
