import 'dotenv/config';
import { AnswerCallbackQueryDto } from 'src/webhook-tg/dto/answerCallbackQuery.dto';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
export declare class ResponsesService {
    sendMessage(message: SendMessageDto): Promise<any>;
    answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryDto): Promise<any>;
}
