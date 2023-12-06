import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { QuestionService } from 'src/request/question/question.service';
import { InlineKeyboardService } from '../keyboard/inline-keyboard.service';

@Injectable()
export class BuildQuestionService {

    constructor(
        private questionService: QuestionService,
        private inlineKeyboardService: InlineKeyboardService
    ) { }

    async questionText(id: number) {
        const question = await this.questionService.findOne(id)
        const reply_markup = await this.inlineKeyboardService.questionInlineKeboard(question.id)
        const url = {
            chat_id: 5949135498,
            text: question.text,
            reply_markup: reply_markup,
            disable_web_page_preview: true,
            parse_mode: 'HTML'
        }
        return url
    }

}
