import { UpdateDto } from './dto/update.dto';
import { CallbackQueryService } from './callbackQuery.service';
export declare class WebhookTgService {
    private callbackQueryService;
    constructor(callbackQueryService: CallbackQueryService);
    update(updateDto: UpdateDto): void | Promise<void>;
}
