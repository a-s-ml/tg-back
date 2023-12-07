import { Injectable } from '@nestjs/common';
import { BuildKeyboardService } from '../keyboard/build-keyboard.service';
import { SendMessageDto } from 'src/webhook-tg/dto/sendMessage,dto';
import { AnswerService } from 'src/request/answer/answer.service';
import { GetTgService } from 'src/responses/getTG.service';
import { UserDto } from 'src/webhook-tg/dto/user.dto';

@Injectable()
export class BuildStatListService {

    constructor(
        private buildKeyboardService: BuildKeyboardService,
        private answerService: AnswerService,
        private getTgService: GetTgService
    ) { }

    async statStandart(id: bigint) {
        const answers = await this.answerService.getStatChat(id)
        let text: string = 'Рейтинг участников викторины за текущий месяц:\n\n';
        let id_userstat: number=1;

        answers.length > 0 && answers?.map(async item => {
            text = text + `${id_userstat}. ${item.chat_id} \u2013 ${item._sum.reward.toFixed(2)}очк. (${item._count.id} отв.)\n`
            id_userstat++
        })
        const reply_markup = await this.buildKeyboardService.statInlineKeboard()
        const url: SendMessageDto = {
            chat_id: 521884639,
            text: encodeURI(text),
            reply_markup,
            disable_web_page_preview: true,
            parse_mode: 'HTML'
        }
        return url
    }
}
