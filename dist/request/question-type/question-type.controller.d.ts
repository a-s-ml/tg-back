import { QuestionTypeService } from "./question-type.service";
export declare class QuestionTypeController {
    private readonly questionTypeService;
    constructor(questionTypeService: QuestionTypeService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
