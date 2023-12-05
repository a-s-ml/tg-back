import { Injectable } from '@nestjs/common';
import { CallbackDto } from './dto/callback.dto';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';

@Injectable()
export class CallbackQueryService {

    constructor(
        private callbackAnswers: CallbackAnswerService
    ) { }

    update(callbackQuery: CallbackDto) {
        const data = callbackQuery.data.split('_')
        switch (data[0]) {
            case 'answer':
                return this.callbackAnswers.answer(callbackQuery)
            default:
                break;
        }
    }
}



// fetch(`https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=${UpdateDto.message.from.id}&text=${UpdateDto.message.text}`)
