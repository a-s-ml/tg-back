import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class ChatActiveService {
    private dbService;
    constructor(dbService: DbService);
    create(chatActiveCreateInput: Prisma.chatActiveCreateInput): Promise<{
        id: number;
        chat: bigint;
    }>;
    findAll(): Promise<{
        id: number;
        chat: bigint;
    }[]>;
    findOne(chat: bigint): Promise<{
        id: number;
        chat: bigint;
    }>;
    remove(chat: bigint): Promise<{
        id: number;
        chat: bigint;
    }>;
}
