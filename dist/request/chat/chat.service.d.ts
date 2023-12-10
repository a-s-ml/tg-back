import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
import { ResponsesService } from "src/responses/responses.service";
import { ChatDto } from "src/webhook-tg/dto/chat.dto";
import { UserDto } from "src/webhook-tg/dto/user.dto";
export declare class ChatService {
    private dbService;
    private responsesService;
    constructor(dbService: DbService, responsesService: ResponsesService);
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
    findByChatId(chat: bigint): Promise<{
        id: number;
        chat: bigint;
        type: string;
        bot: number;
        date: Date;
        referral: bigint;
        question_type: number;
        time: number;
    }>;
    update(chat: bigint, updateChatDto: Prisma.chatUpdateInput): Promise<void>;
    remove(id: number): string;
    verificationExistence(from: UserDto): Promise<void>;
    verificationExistenceChat(from: ChatDto): Promise<void>;
}
