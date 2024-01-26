import { SelectQuestionService } from "./select-questions.service";
export declare class AutoPostController {
    private selectQuestionService;
    constructor(selectQuestionService: SelectQuestionService);
    getStatChat(id: bigint): Promise<number>;
}
