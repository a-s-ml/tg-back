import { Injectable } from "@nestjs/common"
import { CallbackQueryDto } from "./dto/callbackQuery.dto"
import { CallbackAnswerService } from "./callbackQuery/callbackAnswer.service"
import { MessageDto } from "./dto/Message.dto"
import { ChatMemberUpdatedDto } from "./dto/ChatMemberUpdated.dto"
import { ResponsesService } from "src/responses/responses.service"
import { ChatService } from "src/request/chat/chat.service"
import { PollAnswerDto } from "./dto/pollAnswer.dto"

@Injectable()
export class CallbackQueryService {
	constructor(
		private callbackAnswers: CallbackAnswerService,
		private responsesService: ResponsesService,
		private chatService: ChatService
	) {}

	async update(callbackQuery: CallbackQueryDto) {
		const data = callbackQuery.data.split("_")
		switch (data[0]) {
			case "answer":
				return await this.callbackAnswers.answer(callbackQuery)
			default:
				break
		}
	}

	async pollAnswer(pollAnswer: PollAnswerDto) {
		return await this.callbackAnswers.pollAnswer(pollAnswer)
	}

	async message(message: MessageDto) {
		if (message.text === "/account" || message.text === "/start") {
			const text = `<b>Здравствуйте!</b> \n\nСейчас проходит оптимизация и глобальное обновление бота. \nПриносим свои извинения. \nПолный текущий функционал, а так же дополнительные функции станут доступны 15.12.2023. \n\nНа данный момент вы можете обратиться к @a_s_ml и вам сделают настройки удалённо по вашему желанию. \n\nБот всё ещё отправляет вопросы в активные группы и вы можете на них отвечать`
			await fetch(
				`${process.env.SEND_MESSAGE}chat_id=${
					message.from.id
				}&text=${encodeURI(text)}&parse_mode=HTML`
			)
		}
	}

	async member(memberData: ChatMemberUpdatedDto) {
		await this.responsesService.sendLogToAdmin(
			`new_chat_member: ${memberData.new_chat_member.status}\n${memberData.chat.id}`
		)
		await this.chatService.verificationExistence(memberData.from)
		if (
			memberData.new_chat_member.status === "member" ||
			memberData.new_chat_member.status === "administrator"
		) {
			await this.chatService.verificationExistenceChat(memberData.chat, memberData.from)
		}
	}
}
