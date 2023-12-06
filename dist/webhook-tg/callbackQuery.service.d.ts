import { CallbackQueryDto } from './dto/callbackQuery.dto';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';
export declare class CallbackQueryService {
    private callbackAnswers;
    constructor(callbackAnswers: CallbackAnswerService);
    update(callbackQuery: CallbackQueryDto): Promise<void>;
}
