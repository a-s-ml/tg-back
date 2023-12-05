import { CallbackDto } from "./callback.dto";
import { InlineDto } from "./inline.dto";
import { MessageDto } from "./message.dto";
import { PollAnswerDto } from "./pollAnswer.dto";
export declare class UpdateDto {
    update_id: number;
    message: MessageDto;
    edited_message: MessageDto;
    channel_post: MessageDto;
    edited_channel_post: MessageDto;
    inline_query: InlineDto;
    chosen_inline_result: object;
    callback_query: CallbackDto;
    shipping_query: object;
    pre_checkout_query: object;
    poll: object;
    poll_answer: PollAnswerDto;
    my_chat_member: object;
    chat_member: object;
    chat_join_request: object;
}
