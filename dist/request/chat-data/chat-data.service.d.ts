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
        result: number;
        message_id: bigint;
        date: number;
        question_id: number;
        question_type: string;
        poll_id: bigint;
    }>;
    findLastChat(group: bigint): Promise<{
        id: number;
        group: bigint;
        thread: number;
        group_type: string;
        result: number;
        message_id: bigint;
        date: number;
        question_id: number;
        question_type: string;
        poll_id: bigint;
    }[]>;
    findAllChat(group: bigint): Promise<{
        question_id: number;
    }[]>;
}
