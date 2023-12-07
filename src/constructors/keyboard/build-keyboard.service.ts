import { Injectable } from '@nestjs/common';
import { QuestionService } from 'src/request/question/question.service';
import { ReplyMarkupDto } from './dto/keyboard.dto';

@Injectable()
export class InlineKeyboardService {

    constructor(
        private questionService: QuestionService
    ) { }

    async questionInlineKeboard(id: number) {
        const answers = await this.questionService.findOneAnswers(id)
        const replyMarkup: ReplyMarkupDto =
        {
            resize_keyboard: true,
            inline_keyboard: [
                [
                    {
                        text: answers.answer1,
                        callback_data: `answer_${id}_1`
                    }
                ],
                [
                    {
                        text: answers.answer2,
                        callback_data: `answer_${id}_2`
                    }
                ],
                [
                    {
                        text: answers.answer3,
                        callback_data: `answer_${id}_3`
                    }
                ],
                [
                    {
                        text: answers.answer4,
                        callback_data: `answer_${id}_4`
                    }
                ]
            ]
        }

        return replyMarkup

    }
}
