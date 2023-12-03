import { UserDto } from "./user.dto";
export declare class MessageEntityDto {
    type: string;
    offset: number;
    length: number;
    url?: string;
    user?: UserDto;
    language?: string;
    custom_emoji_id?: boolean;
}
