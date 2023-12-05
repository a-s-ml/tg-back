import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class QuestionService {
    private readonly dbService;
    constructor(dbService: DbService);
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
        answerright: import(".prisma/client").$Enums.question_answerright;
        isactual: import(".prisma/client").$Enums.question_isactual;
        mod: import(".prisma/client").$Enums.question_mod;
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
        answerright: import(".prisma/client").$Enums.question_answerright;
        isactual: import(".prisma/client").$Enums.question_isactual;
        mod: import(".prisma/client").$Enums.question_mod;
        img: string;
        slog: number;
        answers: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        text: string;
        dateadd: Date;
        chat_id: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: import(".prisma/client").$Enums.question_answerright;
        isactual: import(".prisma/client").$Enums.question_isactual;
        mod: import(".prisma/client").$Enums.question_mod;
        img: string;
        slog: number;
        answers: number;
    }>;
    findOneAnswers(id: number): Promise<{
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
    }>;
    update(id: number, updateQuestionDto: Prisma.questionUpdateInput): Promise<{
        id: number;
        text: string;
        dateadd: Date;
        chat_id: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: import(".prisma/client").$Enums.question_answerright;
        isactual: import(".prisma/client").$Enums.question_isactual;
        mod: import(".prisma/client").$Enums.question_mod;
        img: string;
        slog: number;
        answers: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        text: string;
        dateadd: Date;
        chat_id: bigint;
        category: number;
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
        answerright: import(".prisma/client").$Enums.question_answerright;
        isactual: import(".prisma/client").$Enums.question_isactual;
        mod: import(".prisma/client").$Enums.question_mod;
        img: string;
        slog: number;
        answers: number;
    }>;
}