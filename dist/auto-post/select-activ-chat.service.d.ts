import { TimeService } from "src/request/time/time.service";
import { ChatActiveService } from "src/request/chat-active/chat-active.service";
import { ChatDataService } from "src/request/chat-data/chat-data.service";
import { ChatService } from "src/request/chat/chat.service";
import { IChatActive } from "src/interfaces/types/db/IChatActive.interface";
export declare class SelectActivChatService {
    private readonly chatActiveService;
    private readonly chatDataService;
    private readonly chatService;
    private readonly timeService;
    constructor(chatActiveService: ChatActiveService, chatDataService: ChatDataService, chatService: ChatService, timeService: TimeService);
    activChat(): Promise<IChatActive[]>;
}
