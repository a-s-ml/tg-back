import { AnswerService } from 'src/request/answer/answer.service';
import { CallbackQueryDto } from '../dto/callbackQuery.dto';
import { QuestionService } from 'src/request/question/question.service';
import { ResponsesService } from 'src/responses/responses.service';
import { ChatService } from 'src/request/chat/chat.service';
export declare class CallbackAnswerService {
    private answerService;
    private questionService;
    private responsesService;
    private chatService;
    constructor(answerService: AnswerService, questionService: QuestionService, responsesService: ResponsesService, chatService: ChatService);
    answer(callbackQuery: CallbackQueryDto): Promise<void>;
}
