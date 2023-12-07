import { Injectable } from '@nestjs/common';
import { InlineKeyboardService } from '../keyboard/build-keyboard.service';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { AnswerService } from 'src/request/answer/answer.service';

@Injectable()
export class BuildStatListService {

    constructor(
        private answerService: AnswerService,
        private inlineKeyboardService: InlineKeyboardService
    ) { }

    async questionText(id: number) {
        const answers = await this.answerService.findOne(id)
        let ids: number;
        const reply_markup = await this.inlineKeyboardService.questionInlineKeboard(ids)
        let text: string;
        const url: SendMessageDto = {
            chat_id: 521884639,
            text: text,
            reply_markup: reply_markup,
            disable_web_page_preview: true,
            parse_mode: 'HTML'
        }
        return url
    }
}
