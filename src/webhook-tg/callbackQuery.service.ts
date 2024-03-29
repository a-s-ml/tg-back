import { Injectable } from "@nestjs/common"
import { CallbackAnswerService } from "./callbackQuery/callbackAnswer.service"
import { ChatService } from "src/request/chat/chat.service"
import { CallbackQueryInterface } from "src/interfaces/types/CallbackQuery.interface"
import { PollAnswerInterface } from "src/interfaces/types/pollAnswer.interface"
import { MessageInterface } from "src/interfaces/types/Message.interface"
import { ChatMemberUpdatedInterface } from "src/interfaces/types/ChatMemberUpdated.interface"
import { EventEmitter2 } from "@nestjs/event-emitter"
import { InlineKeyboardMarkupInterface } from "src/interfaces/types/InlineKeyboardMarkup.interface"
import { ResponsesService } from "src/responses/responses.service"
import { EventInterface } from "src/request/chat/models/events.interface"

@Injectable()
export class CallbackQueryService {
	constructor(
		private callbackAnswers: CallbackAnswerService,
		private eventEmitter: EventEmitter2,
		private chatService: ChatService,
		private responsesService: ResponsesService
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
		if (message.text === "/account" || message.text === "/start") {
			const event = new EventInterface();
			event.name = "messageToBot";
			event.description = `chat: #id${message.from.id}\n@${message.from.username}\ntext: #${String(message.text).slice(1)}`;
			this.eventEmitter.emit('event', event);
			await this.chatService.verificationExistence(message.from)
			const replyMarkup: InlineKeyboardMarkupInterface = {
				inline_keyboard: [
					[
						{
							text: "Настройки ViktorinaOnlineBot",
							web_app: {
								url: `https://80q.ru/viktorinaonlinebot`
							}
						}
					]
				]
			}
			const text = `
			<b>Здравствуйте!</b>\n\nСейчас проходит оптимизация и глобальное обновление бота.\nСвои пожелания по функционалу бота Вы можете отправить разработчику через приложение...
			`
			await this.responsesService.sendMessage({
				chat_id: message.from.id,
				text: encodeURI(text),
				reply_markup: replyMarkup
			})
		}
	}

	async member(memberData: ChatMemberUpdatedInterface) {
		await this.chatService.verificationExistence(memberData.from)
		if (
			memberData.new_chat_member.status === "member" ||
			memberData.new_chat_member.status === "administrator"
		) {
			await this.chatService.verificationExistenceChat(
				memberData.chat,
				memberData.from
			)
			await fetch(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${memberData.chat.id}
				&text=${encodeURI("<b>Здравствуйте!</b>\n\nНастроить бота можно по ссылке https://t.me/ViktorinaOnlineBot/app \nили @ViktorinaOnlineBot")}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
			const event = new EventInterface();
			event.name = "newChatMember";
			event.description = `status: #${memberData.new_chat_member.status}\ngroup: #id${-memberData.chat.id}\nchat: #id${memberData.from.id}\n@${memberData.from.username}`;
			this.eventEmitter.emit('event', event);
		}
		if (
			memberData.new_chat_member.status === "left" ||
			memberData.new_chat_member.status === "kicked" ||
			memberData.new_chat_member.status === "banned"
		) {
			await this.chatService.removeByChat(memberData.chat.id)
		}
	}


}
