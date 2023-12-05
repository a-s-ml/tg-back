import { Injectable } from '@nestjs/common';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import 'dotenv/config'

@Injectable()
export class AutoPostService {

    constructor(
        private selectQuestionService: SelectQuestionService,
        private selectActivChatService: SelectActivChatService,
        private buildQuestionService: BuildQuestionService
    ) { }

    async publicationInActiveGroup() {
        const chatact = await this.selectActivChatService.activChat()
        for (var key in chatact) {
            const t0 = performance.now();
            const question = await this.selectQuestionService.availableQuestion(chatact[key].chat)
            const url = await this.buildQuestionService.questionText(question.id)
            const url2 = `${process.env.SEND_MESSAGE}chat_id=${url.chat_id}&text=${encodeURI(url.text)}&reply_markup=${JSON.stringify(url.reply_markup)}`
            console.log(url2)
            fetch(url2)
            const t1 = performance.now();
            console.log(t1 - t0, 'milliseconds');
        }
    }
}
