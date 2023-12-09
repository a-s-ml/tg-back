import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import { ResponsesService } from 'src/responses/responses.service';
import { BuildStatListService } from 'src/constructors/statList/build-statList.service';
import { ChatService } from 'src/request/chat/chat.service';
import { ChatDataService } from 'src/request/chat-data/chat-data.service';
export declare class AutoPostService {
    private selectQuestionService;
    private selectActivChatService;
    private buildQuestionService;
    private buildStatListService;
    private responsesService;
    private chatDataService;
    private chatService;
    constructor(selectQuestionService: SelectQuestionService, selectActivChatService: SelectActivChatService, buildQuestionService: BuildQuestionService, buildStatListService: BuildStatListService, responsesService: ResponsesService, chatDataService: ChatDataService, chatService: ChatService);
    publicationInActiveGroup(): Promise<void>;
    publicationInActiveGroupStat(): Promise<void>;
}
