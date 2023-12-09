import { ChatDataService } from './chat-data.service';
import { Prisma } from '@prisma/client';
export declare class ChatDataController {
    private readonly chatDataService;
    constructor(chatDataService: ChatDataService);
    create(createChatDatumDto: Prisma.chatDataCreateInput): Promise<{
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
    findLastChat(group: string): Promise<{
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
    findAllChat(group: string): Promise<{
        question_id: number;
    }[]>;
}
