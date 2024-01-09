import { ChatActiveService } from "./chat-active.service";
import { Prisma } from "@prisma/client";
export declare class ChatActiveController {
    private readonly chatActiveService;
    constructor(chatActiveService: ChatActiveService);
    create(createChatActiveDto: Prisma.chatActiveCreateInput): Promise<any>;
    findAll(): Promise<{
        id: number;
        chat: bigint;
    }[]>;
    findOne(chat: string): Promise<boolean>;
    remove(chat: string): Promise<{
        id: number;
        chat: bigint;
    }>;
}
