import { InlineKeyboardMarkupInterface } from "src/interfaces/types/InlineKeyboardMarkup.interface";
import { QuestionService } from "src/request/question/question.service";
export declare class BuildKeyboardService {
    private questionService;
    constructor(questionService: QuestionService);
    statInlineKeboard(): Promise<InlineKeyboardMarkupInterface>;
    questionInlineKeboard(id: number): Promise<InlineKeyboardMarkupInterface>;
}
