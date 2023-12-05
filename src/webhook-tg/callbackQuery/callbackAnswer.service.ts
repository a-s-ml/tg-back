import { Injectable } from '@nestjs/common';
import { AnswerService } from 'src/request/answer/answer.service';
import { CallbackDto } from '../dto/callback.dto';
import { QuestionService } from 'src/request/question/question.service';

@Injectable()
export class CallbackAnswerService {

    constructor(
        private answerService: AnswerService,
        private questionService: QuestionService
    ) {}

    async answer(callbackQuery: CallbackDto) {
        const data = callbackQuery.data.split('_')
        const reward = await this.questionService.findOne(data[1] as unknown as number)
        const answer = await this.answerService.create({chat_id: callbackQuery.from.id, questionid: data[1] as unknown as number, group_id: callbackQuery.message.chat.id, choice: data[2] as unknown as number, reward: reward.slog})
    }
}



// fetch(`https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=${UpdateDto.message.from.id}&text=${UpdateDto.message.text}`)
