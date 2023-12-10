import { BuildKeyboardService } from "../keyboard/build-keyboard.service";
import { SendMessageDto } from "src/webhook-tg/dto/sendMessage,dto";
import { AnswerService } from "src/request/answer/answer.service";
export declare class BuildStatListService {
    private buildKeyboardService;
    private answerService;
    constructor(buildKeyboardService: BuildKeyboardService, answerService: AnswerService);
    statStandart(id: bigint): Promise<SendMessageDto>;
}
