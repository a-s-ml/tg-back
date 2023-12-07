import { QuestionService } from 'src/request/question/question.service';
import { BuildKeyboardService } from '../keyboard/build-keyboard.service';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { SendPollDto } from 'src/webhook-tg/dto/sendPoll.dto';
import { SendPhotoDto } from 'src/webhook-tg/dto/sendPhoto.dto';
export declare class BuildQuestionService {
    private questionService;
    private buildKeyboardService;
    constructor(questionService: QuestionService, buildKeyboardService: BuildKeyboardService);
    questionText(id: number): Promise<SendMessageDto>;
    questionPoll(id: number): Promise<SendPollDto>;
    questionImg(id: number): Promise<SendPhotoDto>;
}
