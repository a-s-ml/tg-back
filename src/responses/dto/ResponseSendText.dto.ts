import { ReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto"
import { MessageEntityDto } from "src/webhook-tg/dto/MessageEntity.dto"
import { ChatDto } from "src/webhook-tg/dto/Chat.dto"

export class  ResponceSendTextDto {
	message_id: number
	author_signature: string
	sender_chat: ChatDto
	chat: ChatDto
	date: number
	text: string
	entities: MessageEntityDto
	reply_markup: ReplyMarkupDto
}
