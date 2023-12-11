import { Injectable } from "@nestjs/common"
import { SelectQuestionService } from "./select-questions.service"
import { SelectActivChatService } from "./select-activ-chat.service"
import { BuildQuestionService } from "src/constructors/questions/build-question.service"
import { ResponsesService } from "src/responses/responses.service"
import { BuildStatListService } from "src/constructors/statList/build-statList.service"
import { ChatService } from "src/request/chat/chat.service"
import { ChatDataService } from "src/request/chat-data/chat-data.service"
import { ChatActiveService } from "src/request/chat-active/chat-active.service"
import { ResponseSendPollDto } from "src/responses/dto/ResponseSendPoll.dto"
import { ResponceSendPhotoDto } from "src/responses/dto/ResponceSendPhoto.dto"
import { ResponceSendTextDto } from "src/responses/dto/ResponseSendText.dto"
import { ChatDbDto } from "src/request/chat/dto/ChatDb.dto"

@Injectable()
export class AutoPostService {
	constructor(
		private selectQuestionService: SelectQuestionService,
		private selectActivChatService: SelectActivChatService,
		private buildQuestionService: BuildQuestionService,
		private buildStatListService: BuildStatListService,
		private responsesService: ResponsesService,
		private chatDataService: ChatDataService,
		private chatService: ChatService,
		private chatActiveService: ChatActiveService
	) {}

	async publicationInActiveGroup() {
		const chatact = await this.selectActivChatService.activChat()
		console.log(chatact.length)
		if (chatact.length > 0) {
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
					const lastTwo = await this.chatDataService.findLastTwoByChat(chat.chat)
					if (lastTwo[0].question_type === "photo" && lastTwo[1].question_type === "poll") {
						await this.questionTypeText(question.id, chat)
					}
					if (lastTwo[0].question_type === "photo" && lastTwo[1].question_type === "text") {
						await this.questionTypePoll(question.id, chat)
					}
					if (lastTwo[0].question_type === "text" && lastTwo[1].question_type === "photo") {
						await this.questionTypePoll(question.id, chat)
					}
					if (lastTwo[0].question_type === "text" && lastTwo[1].question_type === "poll") {
						await this.questionTypeImg(question.id, chat)
					}
					if (lastTwo[0].question_type === "poll" && lastTwo[1].question_type === "text") {
						await this.questionTypeImg(question.id, chat)
					}	
					if (lastTwo[0].question_type === "poll" && lastTwo[1].question_type === "photo") {
						await this.questionTypeText(question.id, chat)
					}
				}
			}
		}
	}

	async questionTypePoll(question: number, chat: ChatDbDto) {
		const questionPoll = await this.buildQuestionService.questionPoll(
			question,
			chat.chat,
			chat.type
		)
		const response: ResponseSendPollDto =
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
		} else {
			await this.chatActiveService.remove(chat.chat)
		}
	}

	async questionTypeImg(question: number, chat: ChatDbDto) {
		const questionImg = await this.buildQuestionService.questionImg(
			question,
			chat.chat
		)
		const response: ResponceSendPhotoDto =
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
		} else {
			await this.chatActiveService.remove(chat.chat)
		}
	}

	async questionTypeText(question: number, chat: ChatDbDto) {
		const questionTest = await this.buildQuestionService.questionText(
			question,
			chat.chat
		)
		const response: ResponceSendTextDto =
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
		} else {
			await this.chatActiveService.remove(chat.chat)
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
