import { CallbackDto } from './dto/callback.dto';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';
export declare class CallbackQueryService {
    private callbackAnswers;
    constructor(callbackAnswers: CallbackAnswerService);
    update(callbackQuery: CallbackDto): Promise<void>;
}
