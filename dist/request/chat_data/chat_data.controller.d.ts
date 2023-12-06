import { ChatDataService } from './chat_data.service';
import { Prisma } from '@prisma/client';
export declare class ChatDataController {
    private chatDataService;
    constructor(chatDataService: ChatDataService);
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
    findOne(id: string): Promise<string>;
    update(id: string, updateChatDatumDto: Prisma.chat_dataUpdateInput): Promise<{
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
    remove(id: string): Promise<{
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
}
