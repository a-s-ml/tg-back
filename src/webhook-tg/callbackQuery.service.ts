import { Injectable } from '@nestjs/common';
import { CallbackQueryDto } from './dto/callbackQuery.dto';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';
import { MessageDto } from './dto/message.dto';

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

    message(message: MessageDto) {
        if (message.text === '/account' || message.text === '/start') {
            const text = `<b>Здравствуйте!</b> \n\nСейчас проходит оптимизация и глобальное обновление бота. \nПриносим свои извинения. \nПолный текущий функционал, а так же дополнительные функции станут доступны 15.12.2023. \n\nНа данный момент вы можете обратиться к @a_s_ml и вам сделают настройки удалённо по вашему желанию. \n\nБот всё ещё отправляет вопросы в активные группы и вы можете на них отвечать`
            fetch(`${process.env.SEND_MESSAGE}chat_id=${message.from.id}&text=${encodeURI(text)}&parse_mode=HTML`)
        }
    }
}