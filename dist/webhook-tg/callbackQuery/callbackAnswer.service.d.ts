import { AnswerService } from 'src/request/answer/answer.service';
import { CallbackDto } from '../dto/callback.dto';
import { QuestionService } from 'src/request/question/question.service';
export declare class CallbackAnswerService {
    private answerService;
    private questionService;
    constructor(answerService: AnswerService, questionService: QuestionService);
    answer(callbackQuery: CallbackDto): Promise<void>;
}
