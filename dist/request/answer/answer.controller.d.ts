import { AnswerService } from './answer.service';
import { Prisma } from '@prisma/client';
export declare class AnswerController {
    private answerService;
    constructor(answerService: AnswerService);
    create(createAnswerDto: Prisma.answerCreateInput): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }>;
    findAll(): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }>;
    update(id: string, updateAnswerDto: Prisma.answerUpdateInput): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }>;
    getStatChat(id: bigint): Promise<(Prisma.PickEnumerable<Prisma.AnswerGroupByOutputType, "chat_id"[]> & {
        _sum: {
            reward: number;
        };
        _count: {
            id: number;
        };
    })[]>;
}
