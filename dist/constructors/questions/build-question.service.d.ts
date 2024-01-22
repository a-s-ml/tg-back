import { QuestionService } from "src/request/question/question.service";
import { BuildKeyboardService } from "../keyboard/build-keyboard.service";
import { CategoryService } from "src/request/category/category.service";
import { IQuestion } from "src/interfaces/types/db/IQuestion.interface";
import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method";
import { SendPhotoMethod } from "src/interfaces/metods/sendPhoto.method";
import { SendPollMethod } from "src/interfaces/metods/sendPoll.method";
import { EventEmitter2 } from "@nestjs/event-emitter";
export declare class BuildQuestionService {
    private questionService;
    private buildKeyboardService;
    private categoryService;
    private eventEmitter;
    constructor(questionService: QuestionService, buildKeyboardService: BuildKeyboardService, categoryService: CategoryService, eventEmitter: EventEmitter2);
    questionBody(question: IQuestion): Promise<{
        header: string;
        text: string;
        footer: string;
    }>;
    questionText(id: number, chat: bigint): Promise<SendMessageMethod>;
    questionPoll(id: number, chat: bigint, type: string): Promise<SendPollMethod>;
    questionImg(id: number, chat: bigint): Promise<SendPhotoMethod>;
}
