import 'dotenv/config';
import { AnswerCallbackQueryDto } from 'src/webhook-tg/dto/answerCallbackQuery.dto';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { SendPollDto } from 'src/webhook-tg/dto/sendPoll.dto';
import { SendPhotoDto } from 'src/webhook-tg/dto/sendPhoto.dto';
export declare class ResponsesService {
    sendMessage(message: SendMessageDto): Promise<any>;
    sendPoll(message: SendPollDto): Promise<any>;
    sendPhoto(message: SendPhotoDto): Promise<any>;
    answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryDto): Promise<any>;
}
