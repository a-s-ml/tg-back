import { CallbackQueryDto } from "./callbackQuery.dto"
import { InlineDto } from "./inline.dto"
import { MessageDto } from "./message.dto"
import { PollAnswerDto } from "./pollAnswer.dto"

export class UpdateDto {
    update_id: number
    message: MessageDto
    edited_message: MessageDto
    channel_post: MessageDto
    edited_channel_post: MessageDto
    inline_query: InlineDto
    chosen_inline_result: object
    callback_query: CallbackQueryDto
    shipping_query: object
    pre_checkout_query: object
    poll: object
    poll_answer: PollAnswerDto
    my_chat_member: object
    chat_member: object
    chat_join_request: object
}