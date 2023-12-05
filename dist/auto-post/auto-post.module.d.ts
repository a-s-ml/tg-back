import { AutoPostService } from './auto-post.service';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
export declare class AutoPostModule {
    providers: [
        AutoPostService,
        SelectActivChatService,
        SelectQuestionService,
        BuildQuestionService,
        AutoPostService
    ];
}
