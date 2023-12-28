import { ChatService } from "./chat.service";
import { Prisma } from "@prisma/client";
import { ValidateService } from "./validate.service";
export declare class ChatController {
    private chatService;
    private validateService;
    constructor(chatService: ChatService, validateService: ValidateService);
    initData(initData: string): Promise<{
        validate: boolean;
        UserData: import("./dto/responseUserData.interface").responseUserDataInterface;
        groups: number;
        questions: number;
        answers: number;
    }>;
    findByReferal(chat: bigint): Promise<any>;
    groupInfoById(chat: bigint): Promise<import("../../interfaces/types/Chat.interface").ChatInterface>;
    groupMemberCountById(chat: bigint): Promise<number>;
    tgGetFilePhoto(unic_id: string): Promise<void>;
    update(chat: string, updateChatDto: Prisma.chatUpdateInput): Promise<void>;
}
