import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class AnswerService {
    private dbService;
    constructor(dbService: DbService);
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
    findOne(id: number): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }>;
    findOneChat(chat_id: number, questionid: number, group_id: bigint): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }[]>;
    getStatChat(group_id: bigint): Promise<(Prisma.PickEnumerable<Prisma.AnswerGroupByOutputType, "chat_id"[]> & {
        _sum: {
            reward: number;
        };
        _count: {
            id: number;
        };
    })[]>;
    update(id: number, updateAnswerDto: Prisma.answerUpdateInput): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        chat_id: bigint;
        questionid: number;
        group_id: bigint;
        choice: number;
        reward: number;
        dateadd: Date;
    }>;
}
