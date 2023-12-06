import { AnswerService } from 'src/request/answer/answer.service';
import { CallbackQueryDto } from '../dto/callbackQuery.dto';
import { QuestionService } from 'src/request/question/question.service';
import { ResponsesService } from 'src/responses/responses.service';
export declare class CallbackAnswerService {
    private answerService;
    private questionService;
    private responsesService;
    constructor(answerService: AnswerService, questionService: QuestionService, responsesService: ResponsesService);
    answer(callbackQuery: CallbackQueryDto): Promise<void>;
}
