import { Injectable } from '@nestjs/common';
import { QuestionService } from 'src/request/question/question.service';
import { BuildKeyboardService } from '../keyboard/build-keyboard.service';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { SendPollDto } from 'src/webhook-tg/dto/sendPoll.dto';
import { SendPhotoDto } from 'src/webhook-tg/dto/sendPhoto.dto';

@Injectable()
export class BuildQuestionService {

    constructor(
        private questionService: QuestionService,
        private buildKeyboardService: BuildKeyboardService
    ) { }

    async questionText(id: number) {
        const question = await this.questionService.findOne(id)
        const reply_markup = await this.buildKeyboardService.questionInlineKeboard(question.id)
        const url: SendMessageDto = {
            chat_id: 521884639,
            text: encodeURI(question.text),
            reply_markup: reply_markup,
            disable_web_page_preview: true,
            parse_mode: 'HTML'
        }
        return url
    }
    async questionPoll(id: number) {
        const question = await this.questionService.findOne(id)
        const url: SendPollDto = {
            chat_id: 521884639,
            question: encodeURI(question.text),
            options: [question.answer1,question.answer2,question.answer3,question.answer4],
            correct_option_id: question.answerright
        }
        return url
    }
    async questionImg(id: number) {
        const question = await this.questionService.findOne(id)
        const reply_markup = await this.buildKeyboardService.questionInlineKeboard(question.id)
        const url: SendPhotoDto = {
            chat_id: 521884639,
            caption: encodeURI(question.text),
            photo: question.img,
            reply_markup: reply_markup
        }
        return url
    }
}
