import { ReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto"

export class EditMessageCaptionDto {
	chat_id?: number
	message_id?: number
	inline_message_id?: string
	caption?: string
	parse_mode?: boolean
	caption_entities?: object
	reply_markup?: ReplyMarkupDto
}