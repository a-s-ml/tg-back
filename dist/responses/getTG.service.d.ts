import 'dotenv/config';
export declare class GetTgService {
    tgGetChat(id: bigint): Promise<any>;
    tgGetChatAdministrators(id: bigint): Promise<any>;
    tgGetChatMember(chat_id: bigint, user_id: bigint): Promise<any>;
    tgGetChatMemberCount(id: bigint): Promise<any>;
    tgGetUserProfilePhotos(id: bigint): Promise<any>;
    tgGetMe(): Promise<any>;
}
