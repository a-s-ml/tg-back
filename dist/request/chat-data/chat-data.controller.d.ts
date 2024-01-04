import { ChatDataService } from "./chat-data.service";
import { Prisma } from "@prisma/client";
export declare class ChatDataController {
    private readonly chatDataService;
    constructor(chatDataService: ChatDataService);
    create(createChatDatumDto: Prisma.chatDataCreateInput): Promise<{
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
    findLastByChat(group: string): Promise<{
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
    findAllByChat(group: string): Promise<{
        question_id: number;
    }[]>;
    findTypeLastTwoByChat(group: string): Promise<string[]>;
}
