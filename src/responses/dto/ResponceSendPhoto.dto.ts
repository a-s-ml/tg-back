import { ReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto"
import { InputFileDto } from "src/webhook-tg/dto/InputFile.dto"
import { MessageEntityDto } from "src/webhook-tg/dto/MessageEntity.dto"
import { ChatDto } from "src/webhook-tg/dto/Chat.dto"

export class  ResponceSendPhotoDto {
	message_id: number
	author_signature: string
	sender_chat: ChatDto
	chat: ChatDto
	date: number
	photo: InputFileDto | string
	caption: string
	caption_entities: MessageEntityDto
	reply_markup: ReplyMarkupDto
}
