import { MessageDto } from "./Message.dto";
import { UserDto } from "./user.dto";
export declare class CallbackQueryDto {
    id: string;
    from: UserDto;
    message?: MessageDto;
    inline_message_id?: string;
    chat_instance: string;
    data?: string;
    game_short_name?: string;
}
