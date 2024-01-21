import { CallbackQueryService } from "./callbackQuery.service";
import { UpdateInterface } from "src/interfaces/types/Update.dto";
export declare class WebhookTgService {
    private callbackQueryService;
    constructor(callbackQueryService: CallbackQueryService);
    update(updateDto: UpdateInterface): Promise<void>;
}
