import { BuildKeyboardService } from "../keyboard/build-keyboard.service";
import { AnswerService } from "src/request/answer/answer.service";
import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method";
export declare class BuildStatListService {
    private buildKeyboardService;
    private answerService;
    constructor(buildKeyboardService: BuildKeyboardService, answerService: AnswerService);
    statStandart(id: bigint): Promise<SendMessageMethod>;
}
