import { Injectable } from "@nestjs/common"
import { CallbackAnswerService } from "./callbackQuery/callbackAnswer.service"
import { ChatService } from "src/request/chat/chat.service"
import { CallbackQueryInterface } from "src/interfaces/types/CallbackQuery.interface"
import { PollAnswerInterface } from "src/interfaces/types/pollAnswer.interface"
import { MessageInterface } from "src/interfaces/types/Message.interface"
import { ChatMemberUpdatedInterface } from "src/interfaces/types/ChatMemberUpdated.interface"
import { EventEmitter2 } from "@nestjs/event-emitter"

@Injectable()
export class CallbackQueryService {
	constructor(
		private callbackAnswers: CallbackAnswerService,
		private eventEmitter: EventEmitter2,
		private chatService: ChatService
	) {}

	async update(callbackQuery: CallbackQueryInterface) {
		const data = callbackQuery.data.split("_")
		switch (data[0]) {
			case "answer":
				return await this.callbackAnswers.answer(callbackQuery)
			default:
				break
		}
	}

	async pollAnswer(pollAnswer: PollAnswerInterface) {
		return await this.callbackAnswers.pollAnswer(pollAnswer)
	}

	async message(message: MessageInterface) {
		await this.chatService.verificationExistence(message.from)
		if (message.text === "/account" || message.text === "/start") {
			const text = `
			<b>Здравствуйте!</b>
			Сейчас проходит оптимизация и глобальное обновление бота.
			Приносим свои извинения. \nПолный текущий функционал, а так же дополнительные функции станут доступны 08.01.2024.
			На данный момент вы можете обратиться к @a_s_ml и вам сделают настройки удалённо по вашему желанию.
			Бот всё ещё отправляет вопросы в активные группы и вы можете на них отвечать
			`
			await fetch(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${message.from.id}
				&text=${encodeURI(text)}
				&parse_mode=HTML
				`
			)
		}
	}

	async member(memberData: ChatMemberUpdatedInterface) {
		const emitText: string = `
		new_chat_member: ${memberData.new_chat_member.status}\n
		${memberData.chat.id}\n
		@${memberData.chat.username}
		`
		await this.eventEmitter.emitAsync("newChatMember.chatMember", emitText)
		await this.chatService.verificationExistence(memberData.from)
		if (
			memberData.new_chat_member.status === "member" ||
			memberData.new_chat_member.status === "administrator"
		) {
			await this.chatService.verificationExistenceChat(
				memberData.chat,
				memberData.from
			)
		}
		if (
			memberData.new_chat_member.status === "left" ||
			memberData.new_chat_member.status === "kicked" ||
			memberData.new_chat_member.status === "banned"
		) {
			await this.chatService.remove(memberData.chat.id)
		}
	}
}
