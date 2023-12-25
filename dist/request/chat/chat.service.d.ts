import { EventEmitter2 } from "@nestjs/event-emitter";
import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
import { ChatInterface } from "src/interfaces/types/Chat.interface";
import { UserInterface } from "src/interfaces/types/User.interface";
import { GetTgService } from "src/responses/getTgAPI.service";
export declare class ChatService {
    private dbService;
    private getTgService;
    private eventEmitter;
    constructor(dbService: DbService, getTgService: GetTgService, eventEmitter: EventEmitter2);
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
    findByReferal(chat: bigint): Promise<{
        id: number;
        chat: bigint;
        type: string;
        bot: number;
        date: Date;
        referral: bigint;
        question_type: number;
        time: number;
    }[]>;
    findByReferal2(chat: bigint): Promise<string>;
    update(chat: bigint, updateChatDto: Prisma.chatUpdateInput): Promise<void>;
    verificationExistence(from: UserInterface): Promise<void>;
    verificationExistenceChat(chat: ChatInterface, from: UserInterface): Promise<void>;
}
