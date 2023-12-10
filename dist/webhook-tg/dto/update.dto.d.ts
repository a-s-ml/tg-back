import { ChatMemberDto } from "./ChatMember.dto";
import { ChatMemberUpdatedDto } from "./ChatMemberUpdated.dto";
import { CallbackQueryDto } from "./callbackQuery.dto";
import { InlineDto } from "./inline.dto";
import { MessageDto } from "./Message.dto";
import { PollDto } from "./Poll.dto";
import { PollAnswerDto } from "./pollAnswer.dto";
import { ChatJoinRequestDto } from "./ChatJoinRequest.dto";
export declare class UpdateDto {
    update_id: number;
    message: MessageDto;
    edited_message: MessageDto;
    channel_post: MessageDto;
    edited_channel_post: MessageDto;
    inline_query: InlineDto;
    chosen_inline_result: object;
    callback_query: CallbackQueryDto;
    shipping_query: object;
    pre_checkout_query: object;
    poll: PollDto;
    poll_answer: PollAnswerDto;
    my_chat_member: ChatMemberUpdatedDto;
    chat_member: ChatMemberDto;
    chat_join_request: ChatJoinRequestDto;
}
