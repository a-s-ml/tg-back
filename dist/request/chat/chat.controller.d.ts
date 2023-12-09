import { ChatService } from './chat.service';
import { Prisma } from '@prisma/client';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    create(createChatDto: Prisma.chatCreateInput): Promise<{
        id: number;
        chat: bigint;
        type: string;
        bot: number;
        date: Date;
        referral: bigint;
        question_type: number;
        time: number;
    }>;
    update(chat: string, updateChatDto: Prisma.chatUpdateInput): Promise<void>;
    remove(id: string): string;
}
