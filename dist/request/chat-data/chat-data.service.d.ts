import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
export declare class ChatDataService {
    private dbService;
    constructor(dbService: DbService);
    create(chatDataCreateInput: Prisma.chatDataCreateInput): Promise<{
        id: number;
        group: bigint;
        thread: number;
        group_type: string;
        message_id: bigint;
        date: number;
        question_id: number;
        question_type: string;
        poll_id: string;
    }>;
    findLastByChat(group: bigint): Promise<{
        id: number;
        group: bigint;
        thread: number;
        group_type: string;
        message_id: bigint;
        date: number;
        question_id: number;
        question_type: string;
        poll_id: string;
    }[]>;
    findByPollId(poll_id: string): Promise<{
        id: number;
        group: bigint;
        thread: number;
        group_type: string;
        message_id: bigint;
        date: number;
        question_id: number;
        question_type: string;
        poll_id: string;
    }[]>;
    findAllByChat(group: bigint): Promise<{
        question_id: number;
    }[]>;
    countAllByChat(group: bigint): Promise<number>;
    findLastTwoByChat(group: bigint): Promise<{
        id: number;
        group: bigint;
        thread: number;
        group_type: string;
        message_id: bigint;
        date: number;
        question_id: number;
        question_type: string;
        poll_id: string;
    }[]>;
    findTypeLastTwoByChat(group: bigint): Promise<string[]>;
}
