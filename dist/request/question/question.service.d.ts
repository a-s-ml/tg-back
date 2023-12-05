import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class QuestionService {
    private readonly dbService;
    constructor(dbService: DbService);
    create(createQuestionDto: Prisma.questionCreateInput): Prisma.Prisma__questionClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
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
    findOne(id: number): Prisma.Prisma__questionClient<{
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findOneAnswers(id: number): Prisma.Prisma__questionClient<{
        answer1: string;
        answer2: string;
        answer3: string;
        answer4: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateQuestionDto: Prisma.questionUpdateInput): Prisma.Prisma__questionClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__questionClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
