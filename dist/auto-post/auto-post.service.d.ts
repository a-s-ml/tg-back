import { SelectQuestionService } from "./select-questions.service";
import { SelectActivChatService } from "./select-activ-chat.service";
import { BuildQuestionService } from "src/constructors/questions/build-question.service";
import { ResponsesService } from "src/responses/responses.service";
import { BuildStatListService } from "src/constructors/statList/build-statList.service";
import { ChatService } from "src/request/chat/chat.service";
import { ChatDataService } from "src/request/chat-data/chat-data.service";
import { ChatActiveService } from "src/request/chat-active/chat-active.service";
import { ChatDbDto } from "src/request/chat/dto/ChatDb.dto";
export declare class AutoPostService {
    private selectQuestionService;
    private selectActivChatService;
    private buildQuestionService;
    private buildStatListService;
    private responsesService;
    private chatDataService;
    private chatService;
    private chatActiveService;
    constructor(selectQuestionService: SelectQuestionService, selectActivChatService: SelectActivChatService, buildQuestionService: BuildQuestionService, buildStatListService: BuildStatListService, responsesService: ResponsesService, chatDataService: ChatDataService, chatService: ChatService, chatActiveService: ChatActiveService);
    publicationInActiveGroup(): Promise<void>;
    questionTypePoll(question: number, chat: ChatDbDto): Promise<void>;
    questionTypeImg(question: number, chat: ChatDbDto): Promise<void>;
    questionTypeText(question: number, chat: ChatDbDto): Promise<void>;
    publicationInActiveGroupStat(): Promise<void>;
}
