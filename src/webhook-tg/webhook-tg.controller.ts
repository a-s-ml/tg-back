import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebhookTgService } from './webhook-tg.service';
import { UpdateDto } from './dto/update.dto';

@Controller('webhook-tg')
export class WebhookTgController {

    constructor(private readonly webhookTg: WebhookTgService) { }

    @Post()
    update(@Body() UpdateDto: UpdateDto) {
        if (UpdateDto.callback_query) {

        }
        if (UpdateDto.message) {

        }
        if (UpdateDto.my_chat_member) {

        }
        console.log(UpdateDto)
        return this.webhookTg.update(UpdateDto);
    }
}
