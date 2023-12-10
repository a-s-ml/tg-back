import { ReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto";
export declare class EditMessageTextDto {
    chat_id?: number;
    message_id: number;
    inline_message_id?: number;
    text: string;
    parse_mode?: string;
    entities?: object;
    disable_web_page_preview?: boolean;
    reply_markup?: ReplyMarkupDto;
}
