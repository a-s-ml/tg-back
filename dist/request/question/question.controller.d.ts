import { QuestionService } from "./question.service";
import { Prisma } from "@prisma/client";
export declare class QuestionController {
    private questionService;
    constructor(questionService: QuestionService);
    create(createQuestionDto: Prisma.questionCreateInput): Promise<any>;
    findAll(): Promise<{
        id: number;
        text: string;
        date: Date;
        chat: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: number;
        isactual: number;
        mod: number;
        img: string;
        reward: number;
    }[]>;
    findByChatId(chat: bigint): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateQuestionDto: Prisma.questionUpdateInput): Promise<{
        id: number;
        text: string;
        date: Date;
        chat: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: number;
        isactual: number;
        mod: number;
        img: string;
        reward: number;
    }>;
    countReward(id: string): Promise<number>;
    count(id: string): Promise<number>;
    remove(id: string): Promise<{
        id: number;
        text: string;
        date: Date;
        chat: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: number;
        isactual: number;
        mod: number;
        img: string;
        reward: number;
    }>;
}
