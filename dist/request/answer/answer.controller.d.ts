import { AnswerService } from './answer.service';
import { Prisma } from '@prisma/client';
export declare class AnswerController {
    private answerService;
    constructor(answerService: AnswerService);
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
    findOne(id: string): Prisma.Prisma__answerClient<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateAnswerDto: Prisma.answerUpdateInput): Prisma.Prisma__answerClient<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__answerClient<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
