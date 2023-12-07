import { QuestionService } from 'src/request/question/question.service';
import { ReplyMarkupDto } from './dto/keyboard.dto';
export declare class InlineKeyboardService {
    private questionService;
    constructor(questionService: QuestionService);
    questionInlineKeboard(id: number): Promise<ReplyMarkupDto>;
}
