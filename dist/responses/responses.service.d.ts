import "dotenv/config";
import { AnswerCallbackQueryDto } from "src/webhook-tg/dto/answerCallbackQuery.dto";
import { EditMessageTextDto, SendMessageDto } from "src/webhook-tg/dto/sendMessage,dto";
import { EditMessageCaptionDto, SendPollDto } from "src/webhook-tg/dto/sendPoll.dto";
import { EditMessageReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto";
import { SendPhotoDto } from "src/webhook-tg/dto/sendPhoto.dto";
export declare class ResponsesService {
    sendMessage(message: SendMessageDto): Promise<any>;
    editMessageText(message: EditMessageTextDto): Promise<any>;
    sendPoll(message: SendPollDto): Promise<any>;
    editMessageCaption(message: EditMessageCaptionDto): Promise<any>;
    sendPhoto(message: SendPhotoDto): Promise<any>;
    editMessageReplyMarkup(message: EditMessageReplyMarkupDto): Promise<any>;
    answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryDto): Promise<any>;
    sendLogToAdmin(data: string): Promise<any>;
}
