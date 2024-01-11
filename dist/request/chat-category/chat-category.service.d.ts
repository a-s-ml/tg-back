import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
import { ResponsesService } from "src/responses/responses.service";
export declare class ChatCategoryService {
    private dbService;
    private responsesService;
    constructor(dbService: DbService, responsesService: ResponsesService);
    create(chatCategoryCreateInput: Prisma.chatCategoryCreateInput): Promise<{
        id: number;
        chat: bigint;
        category: number;
    }>;
    findChat(chat: bigint): Promise<{
        category: number;
    }[]>;
    remove(id: number): Promise<{
        id: number;
        chat: bigint;
        category: number;
    }>;
    clean(): Promise<void>;
}
