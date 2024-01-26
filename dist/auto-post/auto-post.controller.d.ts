import { SelectQuestionService } from "./select-questions.service";
export declare class AutoPostController {
    private selectQuestionService;
    constructor(selectQuestionService: SelectQuestionService);
    countAvailableQuestionByChatId(id: bigint): Promise<number>;
    countPublishedQuestion(id: bigint): Promise<number>;
}
