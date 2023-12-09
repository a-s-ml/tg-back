import { AnswerService } from './answer.service';
import { Prisma } from '@prisma/client';
export declare class AnswerController {
    private answerService;
    constructor(answerService: AnswerService);
    create(createAnswerDto: Prisma.answerCreateInput): Promise<{
        id: number;
        chat: bigint;
        question: number;
        group: bigint;
        choice: number;
        reward: number;
        date: Date;
    }>;
    findAll(): Promise<{
        id: number;
        chat: bigint;
        question: number;
        group: bigint;
        choice: number;
        reward: number;
        date: Date;
    }[]>;
    update(id: string, updateAnswerDto: Prisma.answerUpdateInput): Promise<{
        id: number;
        chat: bigint;
        question: number;
        group: bigint;
        choice: number;
        reward: number;
        date: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        chat: bigint;
        question: number;
        group: bigint;
        choice: number;
        reward: number;
        date: Date;
    }>;
    getStatChat(id: bigint): Promise<(Prisma.PickEnumerable<Prisma.AnswerGroupByOutputType, "chat"[]> & {
        _sum: {
            reward: number;
        };
        _count: {
            id: number;
        };
    })[]>;
}
