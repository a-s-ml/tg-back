import { Module } from '@nestjs/common';
import { WebhookTgController } from './webhook-tg.controller';
import { WebhookTgService } from './webhook-tg.service';

@Module({
    controllers: [WebhookTgController],
    providers: [WebhookTgService]
})
export class WebhookTgModule {}
