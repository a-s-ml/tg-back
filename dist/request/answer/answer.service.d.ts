import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
export declare class AnswerService {
    private dbService;
    constructor(dbService: DbService);
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
    countByChatId(chat: bigint): Promise<number>;
    findByChat(chat: bigint, question: number, group: bigint): Promise<{
        id: number;
        chat: bigint;
        question: number;
        group: bigint;
        choice: number;
        reward: number;
        date: Date;
    }[]>;
    getStatChat(group: bigint): Promise<(Prisma.PickEnumerable<Prisma.AnswerGroupByOutputType, "chat"[]> & {
        _sum: {
            reward: number;
        };
        _count: {
            id: number;
        };
    })[]>;
    update(id: number, updateAnswerDto: Prisma.answerUpdateInput): Promise<{
        id: number;
        chat: bigint;
        question: number;
        group: bigint;
        choice: number;
        reward: number;
        date: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        chat: bigint;
        question: number;
        group: bigint;
        choice: number;
        reward: number;
        date: Date;
    }>;
}
