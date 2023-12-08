import { QuestionService } from 'src/request/question/question.service';
import { BuildKeyboardService } from '../keyboard/build-keyboard.service';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { SendPollDto } from 'src/webhook-tg/dto/sendPoll.dto';
import { SendPhotoDto } from 'src/webhook-tg/dto/sendPhoto.dto';
import { CategoryService } from 'src/request/category/category.service';
import { Prisma } from '@prisma/client';
export declare class BuildQuestionService {
    private questionService;
    private buildKeyboardService;
    private categoryService;
    constructor(questionService: QuestionService, buildKeyboardService: BuildKeyboardService, categoryService: CategoryService);
    questionBody(question: Prisma.questionCreateInput): Promise<{
        header: string;
        text: string;
        footer: string;
    }>;
    questionText(id: number): Promise<SendMessageDto>;
    questionPoll(id: number): Promise<SendPollDto>;
    questionImg(id: number): Promise<SendPhotoDto>;
}
