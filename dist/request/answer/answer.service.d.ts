import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class AnswerService {
    private dbService;
    constructor(dbService: DbService);
    create(createAnswerDto: Prisma.answerCreateInput): Prisma.Prisma__answerClient<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }[]>;
    findOne(id: number): Prisma.Prisma__answerClient<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findOneChat(chat_id: number, questionid: number, group_id: bigint): Prisma.PrismaPromise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }[]>;
    update(id: number, updateAnswerDto: Prisma.answerUpdateInput): Prisma.Prisma__answerClient<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__answerClient<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
