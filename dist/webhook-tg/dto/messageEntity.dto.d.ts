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
export declare enum MessageEntityTypeDto {
    mention = 0,
    hashtag = 1,
    cashtag = 2,
    bot_command = 3,
    url = 4,
    email = 5,
    phone_number = 6,
    bold = 7,
    italic = 8,
    underline = 9,
    strikethrough = 10,
    spoiler = 11,
    code = 12,
    pre = 13,
    text_link = 14,
    text_mention = 15,
    custom_emoji = 16
}
