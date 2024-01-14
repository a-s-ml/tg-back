import { EventEmitter2 } from "@nestjs/event-emitter";
import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
import { ChatInterface } from "src/interfaces/types/Chat.interface";
import { UserInterface } from "src/interfaces/types/User.interface";
import { GetTgService } from "src/responses/getTgAPI.service";
import { ResponsesService } from "src/responses/responses.service";
export declare class ChatService {
    private dbService;
    private getTgService;
    private responsesService;
    private eventEmitter;
    constructor(dbService: DbService, getTgService: GetTgService, responsesService: ResponsesService, eventEmitter: EventEmitter2);
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
    findById(id: number): Promise<{
        id: number;
        chat: bigint;
        type: string;
        bot: number;
        date: Date;
        referral: bigint;
        question_type: number;
        time: number;
    }>;
    clean(): Promise<void>;
    findByChatId(chat: bigint): Promise<any>;
    findByReferal(chat: bigint): Promise<any>;
    countByReferal(chat: bigint): Promise<number>;
    update(chat: bigint, updateChatDto: Prisma.chatUpdateInput): Promise<any>;
    verificationExistence(from: UserInterface): Promise<void>;
    verificationExistenceChat(chat: ChatInterface, from: UserInterface): Promise<void>;
    groupInfoById(chat: bigint): Promise<ChatInterface>;
    groupMemberCountById(chat: bigint): Promise<number>;
    tgGetFilePhoto(unic_id: string): Promise<any>;
    removeByChat(chat_id: bigint): Promise<{
        id: number;
        chat: bigint;
        type: string;
        bot: number;
        date: Date;
        referral: bigint;
        question_type: number;
        time: number;
    }>;
    removeById(id: number): Promise<{
        id: number;
        chat: bigint;
        type: string;
        bot: number;
        date: Date;
        referral: bigint;
        question_type: number;
        time: number;
    }>;
}
