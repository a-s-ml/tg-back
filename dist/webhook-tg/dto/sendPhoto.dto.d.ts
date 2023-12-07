import { ReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto";
export declare class SendPhotoDto {
    chat_id: number;
    message_thread_id?: number;
    photo: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: object;
    has_spoiler?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkupDto;
}
