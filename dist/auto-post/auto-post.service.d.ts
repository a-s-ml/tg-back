import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import 'dotenv/config';
export declare class AutoPostService {
    private selectQuestionService;
    private selectActivChatService;
    private buildQuestionService;
    constructor(selectQuestionService: SelectQuestionService, selectActivChatService: SelectActivChatService, buildQuestionService: BuildQuestionService);
    publicationInActiveGroup(): Promise<void>;
}
