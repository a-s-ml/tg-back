import { Injectable } from '@nestjs/common';
import { SelectQuestion } from './select-questions.service';
import { SelectActivChat } from './select-activ-chat.cervice';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';

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
            const url = await this.buildQuestionService.questionText(question[0].id)
            const url2 = `https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=${url.chat_id}&text=${url.text}&reply_markup=${JSON.stringify(url.reply_markup)}`
            console.log(url2)
            fetch(url2)
            const t1 = performance.now();
            console.log(t1 - t0, 'milliseconds');
        }
    }
}
