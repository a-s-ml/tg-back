import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class ChatActService {
    private dbService;
    constructor(dbService: DbService);
    create(createChatActDto: Prisma.chat_actCreateInput): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }>;
    findAll(): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }>;
    update(id: number, updateChatActDto: Prisma.chat_actUpdateInput): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }>;
}
