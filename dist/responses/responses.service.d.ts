import "dotenv/config";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { SendPollMethod } from "src/interfaces/metods/sendPoll.method";
import { SendPhotoMethod } from "src/interfaces/metods/sendPhoto.method";
import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method";
import { EditMessageTextMethod } from "src/interfaces/metods/editMessageText.method";
import { EditMessageCaptionMethod } from "src/interfaces/metods/editMessageCaption.method";
import { AnswerCallbackQueryMethod } from "src/interfaces/metods/answerCallbackQuery.method";
import { editMessageReplyMarkupMethod } from "src/interfaces/metods/editMessageReplyMarkup.method";
export declare class ResponsesService {
    private eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    sendMessage(message: SendMessageMethod): Promise<any>;
    editMessageText(message: EditMessageTextMethod): Promise<any>;
    sendPoll(message: SendPollMethod): Promise<any>;
    editMessageCaption(message: EditMessageCaptionMethod): Promise<any>;
    sendPhoto(message: SendPhotoMethod): Promise<any>;
    editMessageReplyMarkup(message: editMessageReplyMarkupMethod): Promise<any>;
    answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryMethod): Promise<any>;
    sendChatAction(chat: bigint, action: string): Promise<any>;
}
