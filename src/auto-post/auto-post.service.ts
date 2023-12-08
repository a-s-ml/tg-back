import { Injectable } from '@nestjs/common';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import { ResponsesService } from 'src/responses/responses.service';
import { UserService } from 'src/request/user/user.service';
import { BuildStatListService } from 'src/constructors/statList/build-statList.service';
import { ChatDataService } from 'src/request/chat_data/chat_data.service';

@Injectable()
export class AutoPostService {

    constructor(
        private selectQuestionService: SelectQuestionService,
        private selectActivChatService: SelectActivChatService,
        private buildQuestionService: BuildQuestionService,
        private buildStatListService: BuildStatListService,
        private responsesService: ResponsesService,
        private chatDataService: ChatDataService,
        private userService: UserService
    ) { }

    async publicationInActiveGroup() {
        const chatact = await this.selectActivChatService.activChat()
        if (chatact.length > 0) {
            for (var key in chatact) {
                const chat = await this.userService.findByChatId(chatact[key].chat)
                const question = await this.selectQuestionService.availableQuestion(chatact[key].chat)
                if (chat.question_img === 0) {
                    const questionTest = await this.buildQuestionService.questionText(question.id)
                    const response = await this.responsesService.sendMessage(questionTest)
                    await this.chatDataService.create({
                        to_group: chat.chat_id,
                        group_id: response?.result.chat.id,
                        group_type: 'js',
                        message_id: response?.result.message_id,
                        result: 1,
                        date: response?.result.date,
                        question_id: question.id,
                        question_type: '_' + chat.question_img
                    })
                }
                if (chat.question_img === 1) {
                    const questionImg = await this.buildQuestionService.questionImg(question.id)
                    const response = await this.responsesService.sendPhoto(questionImg)
                    await this.chatDataService.create({
                        to_group: chat.chat_id,
                        group_id: response?.result.chat.id,
                        group_type: 'js',
                        message_id: response?.result.message_id,
                        result: 1,
                        date: response?.result.date,
                        question_id: question.id,
                        question_type: '_' + chat.question_img
                    })
                }
                if (chat.question_img === 2) {
                    const questionPoll = await this.buildQuestionService.questionPoll(question.id)
                    const response = await this.responsesService.sendPoll(questionPoll)
                    await this.chatDataService.create({
                        to_group: chat.chat_id,
                        group_id: response?.result.chat.id,
                        group_type: 'js',
                        message_id: response?.result.message_id,
                        result: 1,
                        date: response?.result.date,
                        question_id: question.id,
                        poll_id: response?.result.poll.id,
                        question_type: '_' + chat.question_img
                    })
                }
            }
        }
    }

    async publicationInActiveGroupStat() {
        const chatact = await this.selectActivChatService.activChat()
        for (var key in chatact) {
            const stat = await this.buildStatListService.statStandart(chatact[key].chat)
            await this.responsesService.sendMessage(stat)
        }
    }
}

