import { ChatActService } from './chat_act.service';
import { Prisma } from '@prisma/client';
export declare class ChatActController {
    private readonly chatActService;
    constructor(chatActService: ChatActService);
    create(createChatActDto: Prisma.chat_actCreateInput): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    update(id: string, updateChatActDto: Prisma.chat_actUpdateInput): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }>;
}