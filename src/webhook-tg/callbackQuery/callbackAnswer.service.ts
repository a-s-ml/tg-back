import { Injectable } from '@nestjs/common';
import { AnswerService } from 'src/request/answer/answer.service';
import { CallbackQueryDto } from '../dto/callbackQuery.dto';
import { QuestionService } from 'src/request/question/question.service';
import { ResponsesService } from 'src/responses/responses.service';
import { UserService } from 'src/request/user/user.service';

@Injectable()
export class CallbackAnswerService {

    constructor(
        private answerService: AnswerService,
        private questionService: QuestionService,
        private responsesService: ResponsesService,
        private userService: UserService
    ) { }

    async answer(callbackQuery: CallbackQueryDto) {
        console.log(callbackQuery)
        const data = callbackQuery.data.split('_')
        const checkUser = await this.userService.findOne(callbackQuery.from.id)
        if (checkUser.length == 0) {
            const createUser = {
                chat_id: callbackQuery.from.id,
                is_bot: callbackQuery.from.is_bot ? 1 : 0
            }
            await this.userService.create(createUser)
            //лог
            await this.responsesService.sendLogToAdmin(`new_user answer:\n${callbackQuery.from.id}\n${callbackQuery.from.first_name} ${callbackQuery.from.username}`)
            //
        }
        const checkAnswer = await this.answerService.findOneChat(callbackQuery.from.id, +data[1], callbackQuery.message.chat.id)
        let text: string;
        let reward: number;
        if (checkAnswer.length == 0) {
            //лог
            await this.responsesService.sendLogToAdmin(`new_answer answer:\n${callbackQuery.from.id}\n${callbackQuery.from.first_name} ${callbackQuery.from.username}`)
            //
            const question = await this.questionService.findOne(+data[1])
            if (data[2] as unknown as number == question.answerright) {
                reward = question.slog
                text = `Верно! \n\nДобавлено "${question.slog}" очков`
            } else {
                reward = -question.slog
                text = `Не верно! \n\nВычтено "${question.slog}" очков`
            }
            await this.answerService.create({ chat_id: callbackQuery.from.id, questionid: +data[1], group_id: callbackQuery.message.chat.id, choice: +data[2], reward: reward })
        } else {
            text = `Вы уже двали ответ на этот вопрос!`
        }
        const res = {
            callback_query_id: callbackQuery.id,
            text: encodeURI(text)
        }
        await this.responsesService.answerCallbackQuery(res)
    }
}