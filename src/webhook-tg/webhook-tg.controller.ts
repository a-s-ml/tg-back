import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebhookTgService } from './webhook-tg.service';
import { UpdateDto } from './dto/update.dto';

@Controller('webhook-tg')
export class WebhookTgController {

    constructor(
        private webhookTg: WebhookTgService
    ) {}

    @Post()
    update(@Body() updateDto: UpdateDto) {
        return this.webhookTg.update(updateDto);
    }
}
