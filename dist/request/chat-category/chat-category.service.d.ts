import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
export declare class ChatCategoryService {
    private dbService;
    constructor(dbService: DbService);
    create(chatCategoryCreateInput: Prisma.chatCategoryCreateInput): Promise<any>;
    findChat(chat: bigint): Promise<{
        category: number;
    }[]>;
    remove(id: number): Promise<any>;
}
