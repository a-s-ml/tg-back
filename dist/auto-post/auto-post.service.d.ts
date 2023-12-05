import { SelectQuestion } from './select-questions.service';
import { SelectActivChat } from './select-activ-chat.cervice';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
export declare class AutoPostService {
    private selectQuestion;
    private selectActivChat;
    private buildQuestionService;
    constructor(selectQuestion: SelectQuestion, selectActivChat: SelectActivChat, buildQuestionService: BuildQuestionService);
    publicationInActiveGroup(): Promise<void>;
}
