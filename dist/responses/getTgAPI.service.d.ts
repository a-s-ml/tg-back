import "dotenv/config";
import { ChatMemberInterface } from "src/interfaces/types/ChatMember.interface";
import { UserInterface } from "src/interfaces/types/User.interface";
import { UserProfilePhotosInterface } from "src/interfaces/types/UserProfilePhotos.interface";
import { ChatInterface } from "src/interfaces/types/Chat.interface";
export declare class GetTgService {
    tgGetChat(id: bigint): Promise<ChatInterface>;
    tgGetChatAdministrators(id: bigint): Promise<ChatMemberInterface>;
    tgGetChatMember(chat_id: bigint, user_id: bigint): Promise<ChatMemberInterface>;
    tgGetChatMemberCount(id: bigint): Promise<number>;
    tgGetFilePhoto(unic_id: string): Promise<void>;
    tgGetFile(patch: string): Promise<void>;
    tgGetUserProfilePhotos(id: bigint): Promise<UserProfilePhotosInterface>;
    tgGetMe(): Promise<UserInterface>;
}
