import { QuestionService } from './question.service';
import { Prisma } from '@prisma/client';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    create(createQuestionDto: Prisma.questionCreateInput): Promise<{
        id: number;
        text: string;
        dateadd: Date;
        chat_id: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: number;
        isactual: number;
        mod: number;
        img: string;
        slog: number;
        answers: number;
    }>;
    findAll(): Promise<{
        id: number;
        text: string;
        dateadd: Date;
        chat_id: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: number;
        isactual: number;
        mod: number;
        img: string;
        slog: number;
        answers: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        text: string;
        dateadd: Date;
        chat_id: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: number;
        isactual: number;
        mod: number;
        img: string;
        slog: number;
        answers: number;
    }>;
    update(id: string, updateQuestionDto: Prisma.questionUpdateInput): Promise<{
        id: number;
        text: string;
        dateadd: Date;
        chat_id: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: number;
        isactual: number;
        mod: number;
        img: string;
        slog: number;
        answers: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        text: string;
        dateadd: Date;
        chat_id: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: number;
        isactual: number;
        mod: number;
        img: string;
        slog: number;
        answers: number;
    }>;
}
