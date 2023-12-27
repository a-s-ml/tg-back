import { ChatService } from "./chat.service";
import { Prisma } from "@prisma/client";
import { ValidateService } from "./validate.service";
export declare class ChatController {
    private readonly chatService;
    private readonly validateService;
    constructor(chatService: ChatService, validateService: ValidateService);
    initData(initData: string): Promise<{
        validate: boolean;
        UserData: import("./dto/responseUserData.interface").responseUserDataInterface;
        group: string;
    }>;
    update(chat: string, updateChatDto: Prisma.chatUpdateInput): Promise<void>;
}
