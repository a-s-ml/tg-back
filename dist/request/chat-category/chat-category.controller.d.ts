import { ChatCategoryService } from "./chat-category.service";
import { Prisma } from "@prisma/client";
export declare class ChatCategoryController {
    private readonly chatCategoryService;
    constructor(chatCategoryService: ChatCategoryService);
    create(createChatCategoryDto: Prisma.chatCategoryCreateInput): Promise<any>;
    findOne(chat: string): Promise<{
        category: number;
        id: number;
    }[]>;
    remove(id: string): Promise<any>;
}
