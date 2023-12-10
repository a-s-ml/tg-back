import "dotenv/config";
import { AnswerCallbackQueryDto } from "src/webhook-tg/dto/answerCallbackQuery.dto";
import { SendMessageDto } from "src/webhook-tg/dto/sendMessage,dto";
import { SendPollDto } from "src/webhook-tg/dto/sendPoll.dto";
import { EditMessageReplyMarkupDto } from "src/constructors/keyboard/dto/keyboard.dto";
import { SendPhotoDto } from "src/webhook-tg/dto/sendPhoto.dto";
import { EditMessageTextDto } from "src/webhook-tg/dto/EditMessageText.dto";
import { EditMessageCaptionDto } from "src/webhook-tg/dto/EditMessageCaption.dto";
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
