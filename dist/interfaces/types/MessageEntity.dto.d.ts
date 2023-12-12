import { MessageEntityTypesInterface } from "./MessageEntityTypes.interface";
import { UserInterface } from "./User.interface";
export declare class MessageEntityInterface {
    type: MessageEntityTypesInterface;
    offset: number;
    length: number;
    url?: string;
    user?: UserInterface;
    language?: string;
    custom_emoji_id?: string;
}
