import { Injectable } from '@nestjs/common';
import { SelectQuestion } from './select-questions.service';
import { SelectActivChat } from './select-activ-chat.cervice';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import 'dotenv/config'

@Injectable()
export class AutoPostService {

    constructor(
        private selectQuestion: SelectQuestion,
        private selectActivChat: SelectActivChat,
        private buildQuestionService: BuildQuestionService
    ) { }

    async publicationInActiveGroup() {
        const chatact = await this.selectActivChat.activChat()
        for (var key in chatact) {
            const t0 = performance.now();
            const question = await this.selectQuestion.availableQuestion(chatact[key].chat)
            const url = await this.buildQuestionService.questionText(question.id)
            const url2 = `${process.env.SEND_MESSAGE}chat_id=${url.chat_id}&text=${encodeURI(url.text)}&reply_markup=${JSON.stringify(url.reply_markup)}`
            console.log(url2)
            fetch(url2)
            const t1 = performance.now();
            console.log(t1 - t0, 'milliseconds');
        }
    }
}
