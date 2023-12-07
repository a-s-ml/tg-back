import { Injectable } from '@nestjs/common';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import { ResponsesService } from 'src/responses/responses.service';
import { UserService } from 'src/request/user/user.service';

@Injectable()
export class AutoPostService {

    constructor(
        private selectQuestionService: SelectQuestionService,
        private selectActivChatService: SelectActivChatService,
        private buildQuestionService: BuildQuestionService,
        private responsesService: ResponsesService,
        private userService: UserService
    ) { }

    async publicationInActiveGroup() {
        const chatact = await this.selectActivChatService.activChat()
        for (var key in chatact) {
            const chat = await this.userService.findByChatId(chatact[key].chat)
            const question = await this.selectQuestionService.availableQuestion(chatact[key].chat)
            console.log(chat.question_img)
            switch (chat.question_img) {
                case 0:
                    const questionTest = await this.buildQuestionService.questionText(question.id)
                    await this.responsesService.sendMessage(questionTest)
                    break;
                case 1:
                    const questionImg = await this.buildQuestionService.questionImg(question.id)
                    await this.responsesService.sendPhoto(questionImg)
                    break
                case 2:
                    const questionPoll = await this.buildQuestionService.questionPoll(question.id)
                    await this.responsesService.sendPoll(questionPoll)
                    break;
                default:
                    break;
            }
        }
    }
}
