import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
import { ChatService } from "../chat/chat.service";
export declare class ChatActiveService {
    private dbService;
    private chatService;
    constructor(dbService: DbService, chatService: ChatService);
    create(chatActiveCreateInput: Prisma.chatActiveCreateInput): Promise<{
        id: number;
        chat: bigint;
    }>;
    findAll(): Promise<{
        id: number;
        chat: bigint;
    }[]>;
    findOne(chat: bigint): Promise<boolean>;
    countActiveByReferal(chat: bigint): Promise<number>;
    remove(chat: bigint): Promise<{
        id: number;
        chat: bigint;
    }>;
}
