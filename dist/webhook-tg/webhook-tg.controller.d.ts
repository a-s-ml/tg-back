import { WebhookTgService } from "./webhook-tg.service";
import { UpdateInterface } from "src/interfaces/types/Update.dto";
export declare class WebhookTgController {
    private webhookTg;
    constructor(webhookTg: WebhookTgService);
    update(updateDto: UpdateInterface): Promise<void>;
}
