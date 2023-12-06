import { ReplyMarkupDto } from "src/constructors/keyboard/dto/inline-keyboard-button.dto"

export class SendMessageDto {
    chat_id: number
    message_thread_id?: number
    text: string
    parse_mode?: string
    entities?: object
    disable_web_page_preview?: boolean
    disable_notification?: boolean
    protect_content?: boolean
    reply_to_message_id?: number
    allow_sending_without_reply?: boolean
    reply_markup?: ReplyMarkupDto
}
