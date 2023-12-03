import { WebhookTgService } from './webhook-tg.service';
import { UpdateDto } from './dto/update.dto';
export declare class WebhookTgController {
    private readonly webhookTg;
    constructor(webhookTg: WebhookTgService);
    update(UpdateDto: UpdateDto): void;
}
