import { Injectable } from '@nestjs/common';
import { CallbackQueryDto } from './dto/callbackQuery.dto';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';

@Injectable()
export class CallbackQueryService {

    constructor(
        private callbackAnswers: CallbackAnswerService
    ) { }

    update(callbackQuery: CallbackQueryDto) {
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
