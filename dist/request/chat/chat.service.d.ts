import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
import { ChatInterface } from "src/interfaces/types/Chat.interface";
import { UserInterface } from "src/interfaces/types/User.interface";
import { GetTgService } from "src/responses/getTgAPI.service";
import { ResponsesService } from "src/responses/responses.service";
export declare class ChatService {
    private dbService;
    private responsesService;
    private getTgService;
    constructor(dbService: DbService, responsesService: ResponsesService, getTgService: GetTgService);
    createChat(createChatDto: Prisma.chatCreateInput): Promise<{
        id: number;
        chat: bigint;
        type: string;
        bot: number;
        date: Date;
        referral: bigint;
        question_type: number;
        time: number;
    }>;
    createGroup(createChatDto: Prisma.chatCreateInput): Promise<{
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
    verificationExistence(from: UserInterface): Promise<void>;
    verificationExistenceChat(chat: ChatInterface, from: UserInterface): Promise<void>;
}
