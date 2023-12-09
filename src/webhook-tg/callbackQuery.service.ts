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
        const text = `<b>Здравствуйте!</b>\n\nСейчас проходит оптимизация и глобальное обновление бота.\nПриносим свои извинения\nПолный текущий функционал, а так же дополнительные функции станут доступны 15.12.2023.\n\nНа данный момент вы можете обратиться к @a_s_ml и вам сделают настройки удалённо по вашему желанию.`
        fetch(`${process.env.SEND_MESSAGE}chat_id=${message.from.id}&text=${text}&disable_web_page_preview=true&parse_mode=HTML`)
    }}

