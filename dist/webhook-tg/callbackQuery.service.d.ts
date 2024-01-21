import { CallbackAnswerService } from "./callbackQuery/callbackAnswer.service";
import { ChatService } from "src/request/chat/chat.service";
import { CallbackQueryInterface } from "src/interfaces/types/CallbackQuery.interface";
import { PollAnswerInterface } from "src/interfaces/types/pollAnswer.interface";
import { MessageInterface } from "src/interfaces/types/Message.interface";
import { ChatMemberUpdatedInterface } from "src/interfaces/types/ChatMemberUpdated.interface";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { ResponsesService } from "src/responses/responses.service";
export declare class CallbackQueryService {
    private callbackAnswers;
    private eventEmitter;
    private chatService;
    private responsesService;
    constructor(callbackAnswers: CallbackAnswerService, eventEmitter: EventEmitter2, chatService: ChatService, responsesService: ResponsesService);
    update(callbackQuery: CallbackQueryInterface): Promise<void>;
    pollAnswer(pollAnswer: PollAnswerInterface): Promise<void>;
    message(message: MessageInterface): Promise<void>;
    member(memberData: ChatMemberUpdatedInterface): Promise<void>;
}
