import { Injectable } from '@nestjs/common';
import { UpdateDto } from './dto/update.dto';
import { CallbackQueryService } from './callbackQuery.service';

@Injectable()
export class WebhookTgService {

    constructor(
        private callbackQueryService: CallbackQueryService
    ) {}

    update(updateDto: UpdateDto) {
        if (updateDto.callback_query) {
            return this.callbackQueryService.update(updateDto.callback_query);
        }
        if (updateDto.message?.text) {
            return this.callbackQueryService.message(updateDto.message);
        }
        if (updateDto.my_chat_member) {
            return this.callbackQueryService.member(updateDto.my_chat_member);
        }
    }
}



// fetch(`https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=${UpdateDto.message.from.id}&text=${UpdateDto.message.text}`)
