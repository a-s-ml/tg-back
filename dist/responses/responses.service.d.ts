import "dotenv/config";
import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method";
import { EditMessageTextMethod } from "src/interfaces/metods/editMessageText.method";
import { SendPollMethod } from "src/interfaces/metods/sendPoll.method";
import { EditMessageCaptionMethod } from "src/interfaces/metods/editMessageCaption.method";
import { SendPhotoMethod } from "src/interfaces/metods/sendPhoto.method";
import { editMessageReplyMarkupMethod } from "src/interfaces/metods/editMessageReplyMarkup.method";
import { AnswerCallbackQueryMethod } from "src/interfaces/metods/answerCallbackQuery.method";
export declare class ResponsesService {
    sendMessage(message: SendMessageMethod): Promise<any>;
    editMessageText(message: EditMessageTextMethod): Promise<any>;
    sendPoll(message: SendPollMethod): Promise<any>;
    editMessageCaption(message: EditMessageCaptionMethod): Promise<any>;
    sendPhoto(message: SendPhotoMethod): Promise<any>;
    editMessageReplyMarkup(message: editMessageReplyMarkupMethod): Promise<any>;
    answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryMethod): Promise<any>;
    sendLogToAdmin(data: string): Promise<any>;
    errorResponse(error: any, chat?: bigint): Promise<void>;
}
