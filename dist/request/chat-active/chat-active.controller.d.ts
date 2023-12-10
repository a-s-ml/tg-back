import { ChatActiveService } from "./chat-active.service";
import { Prisma } from "@prisma/client";
export declare class ChatActiveController {
    private readonly chatActiveService;
    constructor(chatActiveService: ChatActiveService);
    create(createChatActiveDto: Prisma.chatActiveCreateInput): Promise<{
        id: number;
        chat: bigint;
    }>;
    findAll(): Promise<{
        id: number;
        chat: bigint;
    }[]>;
    findOne(chat: string): Promise<{
        id: number;
        chat: bigint;
    }>;
    remove(chat: string): Promise<{
        id: number;
        chat: bigint;
    }>;
}
