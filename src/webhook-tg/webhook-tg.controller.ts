import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebhookTgService } from './webhook-tg.service';
import { UpdateDto } from './dto/update.dto';

@Controller('webhook-tg')
export class WebhookTgController {

    constructor(private readonly webhookTg: WebhookTgService) { }

    @Post()
    update(@Body() UpdateDto: UpdateDto) {
        console.log(UpdateDto)
        return this.webhookTg.update(UpdateDto);
    }
}
