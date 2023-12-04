import { AutoPostService } from './auto-post.service';
import { SelectQuestion } from './selectQuestions.service';
import { SelectActivChat } from './selectActivChat.cervice';
export declare class AutoPostModule {
    providers: [
        AutoPostService,
        SelectActivChat,
        SelectQuestion
    ];
}
