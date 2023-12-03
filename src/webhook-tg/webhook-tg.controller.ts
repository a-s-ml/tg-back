import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebhookTgService } from './webhook-tg.service';
import { UpdateDto } from './dto/update.dto';

@Controller('webhook-tg')
export class WebhookTgController {

    constructor(private readonly webhookTg: WebhookTgService) {

    }

    @Post()
    update(@Body() UpdateDto: UpdateDto) {
        fetch(`https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=${UpdateDto.message.from.id}&text=${UpdateDto.message.text}`)
    }
}
