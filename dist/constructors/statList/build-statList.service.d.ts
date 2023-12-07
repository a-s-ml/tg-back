import { InlineKeyboardService } from '../keyboard/build-keyboard.service';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { AnswerService } from 'src/request/answer/answer.service';
export declare class BuildStatListService {
    private answerService;
    private inlineKeyboardService;
    constructor(answerService: AnswerService, inlineKeyboardService: InlineKeyboardService);
    questionText(id: number): Promise<SendMessageDto>;
}
