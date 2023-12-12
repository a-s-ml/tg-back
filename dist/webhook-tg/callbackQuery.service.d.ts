import { CallbackAnswerService } from "./callbackQuery/callbackAnswer.service";
import { ResponsesService } from "src/responses/responses.service";
import { ChatService } from "src/request/chat/chat.service";
import { CallbackQueryInterface } from "src/interfaces/types/CallbackQuery.interface";
import { PollAnswerInterface } from "src/interfaces/types/pollAnswer.interface";
import { MessageInterface } from "src/interfaces/types/Message.interface";
import { ChatMemberUpdatedInterface } from "src/interfaces/types/ChatMemberUpdated.interface";
export declare class CallbackQueryService {
    private callbackAnswers;
    private responsesService;
    private chatService;
    constructor(callbackAnswers: CallbackAnswerService, responsesService: ResponsesService, chatService: ChatService);
    update(callbackQuery: CallbackQueryInterface): Promise<void>;
    pollAnswer(pollAnswer: PollAnswerInterface): Promise<void>;
    message(message: MessageInterface): Promise<void>;
    member(memberData: ChatMemberUpdatedInterface): Promise<void>;
}
