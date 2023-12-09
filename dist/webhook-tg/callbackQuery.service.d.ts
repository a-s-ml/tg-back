import { CallbackQueryDto } from './dto/callbackQuery.dto';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';
import { MessageDto } from './dto/message.dto';
export declare class CallbackQueryService {
    private callbackAnswers;
    constructor(callbackAnswers: CallbackAnswerService);
    update(callbackQuery: CallbackQueryDto): Promise<void>;
    message(message: MessageDto): void;
}
