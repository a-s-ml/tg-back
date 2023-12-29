import { ChatService } from "./chat.service";
import { QuestionService } from "../question/question.service";
import { AnswerService } from "../answer/answer.service";
import { responseUserDataInterface } from "./models/responseUserData.interface";
import "dotenv/config";
import { ChatActiveService } from "../chat-active/chat-active.service";
import { responseProgressDataInterface } from "./models/responseProgressData.interface";
export declare class ValidateService {
    private chatService;
    private questionService;
    private answerService;
    private chatActiveService;
    constructor(chatService: ChatService, questionService: QuestionService, answerService: AnswerService, chatActiveService: ChatActiveService);
    validateUser(initData: string): Promise<{
        validate: boolean;
        UserData: responseUserDataInterface;
        ProgressData: responseProgressDataInterface;
    }>;
}
