import { BuildKeyboardService } from '../keyboard/build-keyboard.service';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { AnswerService } from 'src/request/answer/answer.service';
import { GetTgService } from 'src/responses/getTG.service';
export declare class BuildStatListService {
    private buildKeyboardService;
    private answerService;
    private getTgService;
    constructor(buildKeyboardService: BuildKeyboardService, answerService: AnswerService, getTgService: GetTgService);
    statStandart(id: bigint): Promise<SendMessageDto>;
}
