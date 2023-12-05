import { AutoPostService } from './auto-post.service';
import { SelectQuestion } from './select-questions.service';
import { SelectActivChat } from './select-activ-chat.cervice';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
export declare class AutoPostModule {
    providers: [
        AutoPostService,
        SelectActivChat,
        SelectQuestion,
        BuildQuestionService,
        AutoPostService
    ];
}
