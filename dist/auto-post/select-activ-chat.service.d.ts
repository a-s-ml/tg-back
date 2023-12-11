import { TimeService } from "src/request/time/time.service";
import { ActualityDto } from "./dto/actuality.dto";
import { ChatActiveService } from "src/request/chat-active/chat-active.service";
import { ChatDataService } from "src/request/chat-data/chat-data.service";
import { ChatService } from "src/request/chat/chat.service";
import { ResponsesService } from "src/responses/responses.service";
export declare class SelectActivChatService {
    private readonly chatActiveService;
    private readonly chatDataService;
    private readonly chatService;
    private readonly timeService;
    private readonly responsesService;
    constructor(chatActiveService: ChatActiveService, chatDataService: ChatDataService, chatService: ChatService, timeService: TimeService, responsesService: ResponsesService);
    activChat(): Promise<ActualityDto[]>;
}
