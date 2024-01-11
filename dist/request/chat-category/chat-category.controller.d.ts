import { ChatCategoryService } from "./chat-category.service";
import { Prisma } from "@prisma/client";
export declare class ChatCategoryController {
    private readonly chatCategoryService;
    constructor(chatCategoryService: ChatCategoryService);
    create(createChatCategoryDto: Prisma.chatCategoryCreateInput): Promise<{
        id: number;
        chat: bigint;
        category: number;
    }>;
    clean(): Promise<void>;
    findOne(chat: string): Promise<{
        category: number;
    }[]>;
    remove(id: string): Promise<{
        id: number;
        chat: bigint;
        category: number;
    }>;
}
