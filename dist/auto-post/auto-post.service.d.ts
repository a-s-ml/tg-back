import { SelectQuestion } from './selectQuestions.service';
import { SelectActivChat } from './selectActivChat.cervice';
export declare class AutoPostService {
    private selectQuestion;
    private selectActivChat;
    constructor(selectQuestion: SelectQuestion, selectActivChat: SelectActivChat);
    publicationInActiveGroup(): Promise<void>;
}
