import { CallbackQueryDto } from "./dto/callbackQuery.dto";
import { CallbackAnswerService } from "./callbackQuery/callbackAnswer.service";
import { MessageDto } from "./dto/message.dto";
import { ChatMemberUpdatedDto } from "./dto/ChatMemberUpdated.dto";
import { ResponsesService } from "src/responses/responses.service";
import { ChatService } from "src/request/chat/chat.service";
export declare class CallbackQueryService {
    private callbackAnswers;
    private responsesService;
    private chatService;
    constructor(callbackAnswers: CallbackAnswerService, responsesService: ResponsesService, chatService: ChatService);
    update(callbackQuery: CallbackQueryDto): Promise<void>;
    message(message: MessageDto): Promise<void>;
    member(memberData: ChatMemberUpdatedDto): Promise<void>;
}
