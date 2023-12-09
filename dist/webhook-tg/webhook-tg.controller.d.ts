import { WebhookTgService } from './webhook-tg.service';
import { UpdateDto } from './dto/update.dto';
export declare class WebhookTgController {
    private webhookTg;
    constructor(webhookTg: WebhookTgService);
    update(updateDto: UpdateDto): Promise<void>;
}
