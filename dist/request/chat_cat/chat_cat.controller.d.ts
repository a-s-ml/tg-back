import { ChatCatService } from './chat_cat.service';
import { Prisma } from '@prisma/client';
export declare class ChatCatController {
    private chatCatService;
    constructor(chatCatService: ChatCatService);
    create(createChatCatDto: Prisma.chat_catCreateInput): Promise<{
        id: number;
        chat_id: bigint;
        cat_id: number;
        dateadd: Date;
    }>;
    findAll(): Promise<void>;
    findOne(id: string): Promise<{
        id: number;
        chat_id: bigint;
        cat_id: number;
        dateadd: Date;
    }>;
    update(id: string, updateChatCatDto: Prisma.chat_catUpdateInput): Promise<{
        id: number;
        chat_id: bigint;
        cat_id: number;
        dateadd: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        chat_id: bigint;
        cat_id: number;
        dateadd: Date;
    }>;
}
