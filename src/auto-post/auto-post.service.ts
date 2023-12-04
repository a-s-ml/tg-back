import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { SelectQuestion } from './selectQuestions.service';
import { SelectActivChat } from './selectActivChat.cervice';

@Injectable()
export class AutoPostService {

    constructor(
        private selectQuestion: SelectQuestion,
        private selectActivChat: SelectActivChat
    ) { }

    async publicationInActiveGroup() {
        const chatact = await this.selectActivChat.activChat()
        for (var key in chatact) {
            const t0 = performance.now();
            const a = await this.selectQuestion.availableQuestion(chatact[key].chat)
            fetch(`https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=521884639&text=${chatact[key].chat}-${a[0].id}`)
            const t1 = performance.now();
            console.log(t1 - t0, 'milliseconds');
        }
    }
}
