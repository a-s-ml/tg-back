import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
import { ChatService } from "../chat/chat.service";
export declare class ChatCategoryService {
    private dbService;
    private chatService;
    constructor(dbService: DbService, chatService: ChatService);
    create(chatCategoryCreateInput: Prisma.chatCategoryCreateInput): Promise<{
        id: number;
        chat: bigint;
        category: number;
    }>;
    findChat(chat: bigint): Promise<{
        category: number;
    }[]>;
    clean(): Promise<void>;
    remove(id: number): Promise<{
        id: number;
        chat: bigint;
        category: number;
    }>;
}
