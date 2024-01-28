import { AnswerService } from "src/request/answer/answer.service";
import { QuestionService } from "src/request/question/question.service";
import { ResponsesService } from "src/responses/responses.service";
import { ChatService } from "src/request/chat/chat.service";
import { ChatDataService } from "src/request/chat-data/chat-data.service";
import { CallbackQueryInterface } from "src/interfaces/types/CallbackQuery.interface";
import { PollAnswerInterface } from "src/interfaces/types/pollAnswer.interface";
import { UserInterface } from "src/interfaces/types/User.interface";
import { EventEmitter2 } from "@nestjs/event-emitter";
export declare class CallbackAnswerService {
    private answerService;
    private questionService;
    private responsesService;
    private eventEmitter;
    private chatService;
    private chatDataService;
    constructor(answerService: AnswerService, questionService: QuestionService, responsesService: ResponsesService, eventEmitter: EventEmitter2, chatService: ChatService, chatDataService: ChatDataService);
    answerCheck(chat: UserInterface, group: bigint, answer: number, question_id: number): Promise<string>;
    answer(callbackQuery: CallbackQueryInterface): Promise<void>;
    pollAnswer(pollAnswer: PollAnswerInterface): Promise<void>;
}
