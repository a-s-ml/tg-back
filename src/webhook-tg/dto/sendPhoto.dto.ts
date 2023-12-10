import { ReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto"
import { MessageEntityDto } from "./MessageEntity.dto"
import { InputFileDto } from "./InputFile.dto"

export class SendPhotoDto {
	chat_id: bigint
	message_thread_id?: number
	photo: InputFileDto | string
	caption?: string
	parse_mode?: string
	caption_entities?: MessageEntityDto
	has_spoiler?: boolean
	disable_notification?: boolean
	protect_content?: boolean
	reply_to_message_id?: number
	allow_sending_without_reply?: boolean
	reply_markup?: ReplyMarkupDto
}
