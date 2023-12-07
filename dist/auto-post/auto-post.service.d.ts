import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import { ResponsesService } from 'src/responses/responses.service';
import { UserService } from 'src/request/user/user.service';
export declare class AutoPostService {
    private selectQuestionService;
    private selectActivChatService;
    private buildQuestionService;
    private responsesService;
    private userService;
    constructor(selectQuestionService: SelectQuestionService, selectActivChatService: SelectActivChatService, buildQuestionService: BuildQuestionService, responsesService: ResponsesService, userService: UserService);
    publicationInActiveGroup(): Promise<void>;
}
