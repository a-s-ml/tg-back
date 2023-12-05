import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class ChatCatService {
    private readonly dbService;
    constructor(dbService: DbService);
    create(createChatCatDto: Prisma.chat_catCreateManyInput): Promise<{
        id: number;
        chat_id: bigint;
        cat_id: number;
        dateadd: Date;
    }>;
    findAll(): Promise<void>;
    findOne(id: number): Promise<{
        id: number;
        chat_id: bigint;
        cat_id: number;
        dateadd: Date;
    }>;
    update(id: number, updateChatCatDto: Prisma.chat_catUpdateInput): Promise<{
        id: number;
        chat_id: bigint;
        cat_id: number;
        dateadd: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        chat_id: bigint;
        cat_id: number;
        dateadd: Date;
    }>;
    forbiddenCategory(chatid: bigint): Promise<{
        cat_id: number;
    }[]>;
}
