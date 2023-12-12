import { Injectable } from "@nestjs/common"
import { SelectQuestionService } from "./select-questions.service"
import { SelectActivChatService } from "./select-activ-chat.service"
import { BuildQuestionService } from "src/constructors/questions/build-question.service"
import { ResponsesService } from "src/responses/responses.service"
import { BuildStatListService } from "src/constructors/statList/build-statList.service"
import { ChatService } from "src/request/chat/chat.service"
import { ChatDataService } from "src/request/chat-data/chat-data.service"
import { IChat } from "src/interfaces/types/db/IChat.interface"
import { MessageInterface } from "src/interfaces/types/Message.interface"

@Injectable()
export class AutoPostService {
	constructor(
		private selectQuestionService: SelectQuestionService,
		private selectActivChatService: SelectActivChatService,
		private buildQuestionService: BuildQuestionService,
		private buildStatListService: BuildStatListService,
		private responsesService: ResponsesService,
		private chatDataService: ChatDataService,
		private chatService: ChatService
	) {}

	async publicationInActiveGroup() {
		const chatact = await this.selectActivChatService.activChat()
		if (chatact?.length) {
			for (var key in chatact) {
				const chat = await this.chatService.findByChatId(
					chatact[key].chat
				)
				const question =
					await this.selectQuestionService.availableQuestion(
						chatact[key].chat
					)
				if (chat.question_type === 1) {
					await this.questionTypeImg(question.id, chat)
				}
				if (chat.question_type === 2) {
					await this.questionTypePoll(question.id, chat)
				}
				if (chat.question_type === 3) {
					await this.questionTypeText(question.id, chat)
				}
				if (chat.question_type === 4) {
					const lastTwo =
						await this.chatDataService.findLastTwoByChat(chat.chat)
					if (
						lastTwo[0].question_type === "photo" &&
						lastTwo[1].question_type === "poll"
					) {
						await this.questionTypeText(question.id, chat)
					}
					if (
						lastTwo[0].question_type === "photo" &&
						lastTwo[1].question_type === "text"
					) {
						await this.questionTypePoll(question.id, chat)
					}
					if (
						lastTwo[0].question_type === "text" &&
						lastTwo[1].question_type === "photo"
					) {
						await this.questionTypePoll(question.id, chat)
					}
					if (
						lastTwo[0].question_type === "text" &&
						lastTwo[1].question_type === "poll"
					) {
						await this.questionTypeImg(question.id, chat)
					}
					if (
						lastTwo[0].question_type === "poll" &&
						lastTwo[1].question_type === "text"
					) {
						await this.questionTypeImg(question.id, chat)
					}
					if (
						lastTwo[0].question_type === "poll" &&
						lastTwo[1].question_type === "photo"
					) {
						await this.questionTypeText(question.id, chat)
					}
				}
			}
		}
	}

	async questionTypePoll(question: number, chat: IChat) {
		const questionPoll = await this.buildQuestionService.questionPoll(
			question,
			chat.chat,
			chat.type
		)
		const response: MessageInterface =
			await this.responsesService.sendPoll(questionPoll)
		if (response) {
			await this.chatDataService.create({
				group: response.chat.id,
				group_type: response.chat.type,
				message_id: response.message_id,
				date: response.date,
				question_id: question,
				poll_id: response.poll.id,
				question_type: "poll"
			})
		}
	}

	async questionTypeImg(question: number, chat: IChat) {
		const questionImg = await this.buildQuestionService.questionImg(
			question,
			chat.chat
		)
		const response: MessageInterface =
			await this.responsesService.sendPhoto(questionImg)
		if (response) {
			await this.chatDataService.create({
				group: response.chat.id,
				group_type: response.chat.type,
				message_id: response.message_id,
				date: response.date,
				question_id: question,
				question_type: "photo"
			})
		}
	}

	async questionTypeText(question: number, chat: IChat) {
		const questionTest = await this.buildQuestionService.questionText(
			question,
			chat.chat
		)
		const response: MessageInterface =
			await this.responsesService.sendMessage(questionTest)
		if (response) {
			await this.chatDataService.create({
				group: response.chat.id,
				group_type: response.chat.type,
				message_id: response.message_id,
				date: response.date,
				question_id: question,
				question_type: "text"
			})
		}
	}

	async publicationInActiveGroupStat() {
		const chatact = await this.selectActivChatService.activChat()
		for (var key in chatact) {
			const stat = await this.buildStatListService.statStandart(
				chatact[key].chat
			)
			await this.responsesService.sendMessage(stat)
		}
	}
}
