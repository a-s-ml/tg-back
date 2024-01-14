import { ChatService } from "./chat.service";
import { Prisma } from "@prisma/client";
import { ValidateService } from "./validate.service";
export declare class ChatController {
    private chatService;
    private validateService;
    constructor(chatService: ChatService, validateService: ValidateService);
    initData(initData: string): Promise<{
        validate: boolean;
        UserData: import("./models/responseUserData.interface").responseUserDataInterface;
        ProgressData: import("./models/responseProgressData.interface").responseProgressDataInterface;
    }>;
    findByReferal(chat: bigint): Promise<any>;
    groupInfoById(chat: bigint): Promise<import("../../interfaces/types/Chat.interface").ChatInterface>;
    clean(): Promise<void>;
    groupMemberCountById(chat: bigint): Promise<number>;
    findByChatId(chat: bigint): Promise<any>;
    tgGetFilePhoto(unic_id: string): Promise<any>;
    update(chat: string, updateChatDto: Prisma.chatUpdateInput): Promise<any>;
}
