import { ReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto"
import { MessageEntityDto } from "src/webhook-tg/dto/MessageEntity.dto"
import { ChatDto } from "src/webhook-tg/dto/Chat.dto"
import { PollDto } from "src/webhook-tg/dto/Poll.dto"

export class  ResponseSendPollDto {
	message_id: number
	author_signature: string
	sender_chat: ChatDto
	chat: ChatDto
	date: number
	poll: PollDto
	entities: MessageEntityDto
	reply_markup: ReplyMarkupDto
}
