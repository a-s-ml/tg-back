import { QuestionService } from 'src/request/question/question.service';
import { InlineKeyboardService } from '../keyboard/inline-keyboard.service';
export declare class BuildQuestionService {
    private questionService;
    private inlineKeyboardService;
    constructor(questionService: QuestionService, inlineKeyboardService: InlineKeyboardService);
    questionText(id: number): Promise<{
        chat_id: number;
        text: string;
        reply_markup: import("../keyboard/dto/inline-keyboard-button.dto").ReplyMarkupDto;
        disable_web_page_preview: boolean;
        parse_mode: string;
    }>;
}
