import { Injectable } from "@nestjs/common"
import { AnswerService } from "src/request/answer/answer.service"
import { QuestionService } from "src/request/question/question.service"
import { ResponsesService } from "src/responses/responses.service"
import { ChatService } from "src/request/chat/chat.service"
import { ChatDataService } from "src/request/chat-data/chat-data.service"
import { CallbackQueryInterface } from "src/interfaces/types/CallbackQuery.interface"
import { PollAnswerInterface } from "src/interfaces/types/pollAnswer.interface"
import { UserInterface } from "src/interfaces/types/User.interface"
import { EventEmitter2 } from "@nestjs/event-emitter"
import { EventInterface } from "src/request/chat/models/events.interface"

@Injectable()
export class CallbackAnswerService {
	constructor(
		private answerService: AnswerService,
		private questionService: QuestionService,
		private responsesService: ResponsesService,
		private eventEmitter: EventEmitter2,
		private chatService: ChatService,
		private chatDataService: ChatDataService
	) {}

	async answerCheck(
		chat: UserInterface,
		group: bigint,
		answer: number,
		question_id: number
	) {
		const checkAnswer = await this.answerService.findByChat(
			chat.id,
			question_id,
			group
		)
		let text: string
		let reward: number
		if (checkAnswer.length == 0) {
			const question = await this.questionService.findOne(question_id)
			if (answer == question.answerright) {
				reward = question.reward
				text = `Верно! \n\nДобавлено ${question.reward} очков`
			} else {
				reward = -question.reward
				text = `Не верно! \n\nВычтено ${question.reward} очков`
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

	async answer(callbackQuery: CallbackQueryInterface) {
		const data = callbackQuery.data.split("_")
		const text = await this.answerCheck(
			callbackQuery.from,
			callbackQuery.message.chat.id,
			+data[2],
			+data[1]
		)
		const res = {
			callback_query_id: callbackQuery.id,
			text: encodeURI(text)
		}
		await this.responsesService.answerCallbackQuery(res)
		const event = new EventInterface()
		event.name = "newAnswer"
		event.description = `chat: #id${callbackQuery.from.id}\nusername: @${
			callbackQuery.from.username
		}\ngroup: #id${-callbackQuery.message.chat.id}\nquestion_id: #qid${
			data[1]
		}`
		this.eventEmitter.emit("eventAnswer", event)
	}

	async pollAnswer(pollAnswer: PollAnswerInterface) {
		if (pollAnswer.user) {
			const question = await this.chatDataService.findByPollId(
				pollAnswer.poll_id
			)
			if (question) {
				await this.answerCheck(
					pollAnswer.user,
					question[0].group,
					pollAnswer.option_ids[0] + 1,
					question[0].question_id
				)
				const event = new EventInterface()
				event.name = "newAnswerPoll"
				event.description = `chat: #id${
					pollAnswer.user.id
				}\nusername: @${
					pollAnswer.user.username
				}\ngroup: #id${-question[0].group}\nquestion_id: #qid${
					question[0].question_id
				}`
				this.eventEmitter.emit("eventAnswer", event)
			}
		}
	}
}
