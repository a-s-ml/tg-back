import 'dotenv/config'
import { Injectable } from '@nestjs/common';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import { ResponsesService } from 'src/responses/responses.service';

@Injectable()
export class AutoPostService {

    constructor(
        private selectQuestionService: SelectQuestionService,
        private selectActivChatService: SelectActivChatService,
        private buildQuestionService: BuildQuestionService,
        private responsesService: ResponsesService
    ) { }

    async publicationInActiveGroup() {
        const chatact = await this.selectActivChatService.activChat()
        for (var key in chatact) {
            const question = await this.selectQuestionService.availableQuestion(chatact[key].chat)
            const url = await this.buildQuestionService.questionText(question.id)
            await this.responsesService.sendMessage(url)
        }
    }
}
