import { Injectable } from '@nestjs/common';
import { AnswerService } from 'src/request/answer/answer.service';
import { CallbackQueryDto } from '../dto/callbackQuery.dto';
import { QuestionService } from 'src/request/question/question.service';
import { ResponsesService } from 'src/responses/responses.service';

@Injectable()
export class CallbackAnswerService {

    constructor(
        private answerService: AnswerService,
        private questionService: QuestionService,
        private responsesService: ResponsesService
    ) { }

    async answer(callbackQuery: CallbackQueryDto) {
        console.log(callbackQuery+'callbackQuery')
        const data = callbackQuery.data.split('_')
        const checkAnswer = await this.answerService.findOneChat(callbackQuery.from.id, +data[1], callbackQuery.message.chat.id)

        console.log(data+'data')
        console.log(checkAnswer+'checkAnswer')
        if (checkAnswer.length == 0) {
            const question = await this.questionService.findOne(+data[1])
            console.log(checkAnswer)
            console.log(checkAnswer.length)
            console.log(data[2])
            let text: string;
            let reward: number;
            if (data[2] as unknown as number == question.answerright) {
                console.log(data[2] + ' = ' + question.answerright)
                reward = question.slog
                console.log(reward)
                text = `Правильный ответ, добавлено "${reward}" очков`
            } else {
                console.log(data[2] + ' != ' + question.answerright)
                reward = -question.slog
                console.log(reward)
                text = `Неправильный ответ, добавлено "${reward}" очков`
            }
            await this.answerService.create({ chat_id: callbackQuery.from.id, questionid: +data[1], group_id: callbackQuery.message.chat.id, choice: +data[2], reward: reward })
            const res = {
                callback_query_id: callbackQuery.id,
                text: text
            }
            console.log(res)
            await this.responsesService.answerCallbackQuery(res)
        }
    }
}



// fetch(`https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=${UpdateDto.message.from.id}&text=${UpdateDto.message.text}`)
