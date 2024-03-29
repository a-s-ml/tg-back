import { Prisma } from "@prisma/client";
import { DbService } from "src/db/db.service";
export declare class QuestionService {
    private dbService;
    constructor(dbService: DbService);
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
    findOne(id: number): Promise<any>;
    findByChatId(chat: bigint): Promise<any>;
    findOneAnswers(id: number): Promise<{
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
    }>;
    update(id: number, updateQuestionDto: Prisma.questionUpdateInput): Promise<{
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
    remove(id: number): Promise<{
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
    countByChatId(chat: bigint): Promise<number>;
    countModerateByChatId(chat: bigint): Promise<number>;
    countReward(question: number): Promise<number>;
    count(question: number): Promise<number>;
}
