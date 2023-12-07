import { QuestionService } from 'src/request/question/question.service';
import { ReplyMarkupDto } from './dto/keyboard.dto';
export declare class BuildKeyboardService {
    private questionService;
    constructor(questionService: QuestionService);
    statInlineKeboard(): Promise<ReplyMarkupDto>;
    questionInlineKeboard(id: number): Promise<ReplyMarkupDto>;
}
