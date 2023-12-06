import 'dotenv/config';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import { ResponsesService } from 'src/responses/responses.service';
export declare class AutoPostService {
    private selectQuestionService;
    private selectActivChatService;
    private buildQuestionService;
    private responsesService;
    constructor(selectQuestionService: SelectQuestionService, selectActivChatService: SelectActivChatService, buildQuestionService: BuildQuestionService, responsesService: ResponsesService);
    publicationInActiveGroup(): Promise<void>;
}
