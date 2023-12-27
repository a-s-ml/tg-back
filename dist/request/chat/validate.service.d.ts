import { ChatService } from "./chat.service";
import { QuestionService } from "../question/question.service";
import { AnswerService } from "../answer/answer.service";
import { responseUserDataInterface } from "./dto/responseUserData.interface";
import "dotenv/config";
export declare class ValidateService {
    private chatService;
    private questionService;
    private answerService;
    constructor(chatService: ChatService, questionService: QuestionService, answerService: AnswerService);
    validateUser(initData: string): Promise<{
        validate: boolean;
        UserData: responseUserDataInterface;
        groups: number;
        questions: number;
        answers: number;
    }>;
}
