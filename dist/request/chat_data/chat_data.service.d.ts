import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class ChatDataService {
    private readonly dbService;
    constructor(dbService: DbService);
    create(createChatDatumDto: Prisma.chat_dataCreateInput): Promise<{
        id: number;
        to_group: bigint;
        group_id: bigint;
        thread: number;
        group_type: string;
        result: number;
        message_id: bigint;
        date: number;
        date_add: Date;
        question_id: number;
        question_type: string;
        poll_id: bigint;
        subscribers: number;
    }>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<string>;
    update(id: number, updateChatDatumDto: Prisma.chat_dataUpdateInput): Promise<{
        id: number;
        to_group: bigint;
        group_id: bigint;
        thread: number;
        group_type: string;
        result: number;
        message_id: bigint;
        date: number;
        date_add: Date;
        question_id: number;
        question_type: string;
        poll_id: bigint;
        subscribers: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        to_group: bigint;
        group_id: bigint;
        thread: number;
        group_type: string;
        result: number;
        message_id: bigint;
        date: number;
        date_add: Date;
        question_id: number;
        question_type: string;
        poll_id: bigint;
        subscribers: number;
    }>;
    publishedQuestion(chatid: bigint): Promise<{
        question_id: number;
    }[]>;
}
