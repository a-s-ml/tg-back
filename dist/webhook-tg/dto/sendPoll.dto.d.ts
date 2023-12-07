import { ReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto";
export declare class SendPollDto {
    chat_id: number;
    message_thread_id?: number;
    question: string;
    options: string[];
    is_anonymous?: boolean;
    type?: string;
    allows_multiple_answers?: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_parse_mode?: string;
    explanation_entities?: object;
    open_period?: number;
    close_date?: number;
    is_closed?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkupDto;
}
