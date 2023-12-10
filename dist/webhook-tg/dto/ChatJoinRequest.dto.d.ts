import { ChatDto } from "./Chat.dto";
import { ChatInviteLinkDto } from "./ChatInviteLink.dto";
import { UserDto } from "./user.dto";
export declare class ChatJoinRequestDto {
    chat: ChatDto;
    from: UserDto;
    user_chat_id: number;
    date: number;
    bio?: string;
    invite_link?: ChatInviteLinkDto;
}
