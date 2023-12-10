import { AnswerService } from "src/request/answer/answer.service";
import { CallbackQueryDto } from "../dto/callbackQuery.dto";
import { QuestionService } from "src/request/question/question.service";
import { ResponsesService } from "src/responses/responses.service";
import { ChatService } from "src/request/chat/chat.service";
import { PollAnswerDto } from "../dto/pollAnswer.dto";
import { ChatDataService } from "src/request/chat-data/chat-data.service";
import { UserDto } from "../dto/user.dto";
export declare class CallbackAnswerService {
    private answerService;
    private questionService;
    private responsesService;
    private chatService;
    private chatDataService;
    constructor(answerService: AnswerService, questionService: QuestionService, responsesService: ResponsesService, chatService: ChatService, chatDataService: ChatDataService);
    answerCheck(chat: UserDto, group: bigint, answer: number, question_id: number): Promise<string>;
    answer(callbackQuery: CallbackQueryDto): Promise<void>;
    pollAnswer(pollAnswer: PollAnswerDto): Promise<void>;
}
