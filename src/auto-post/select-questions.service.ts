import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ChatCatService } from 'src/request/chat_cat/chat_cat.service';
import { ChatDataService } from 'src/request/chat_data/chat_data.service';

@Injectable()
export class SelectQuestionService { 

    constructor(
        private dbService: DbService,
        private chatCatService: ChatCatService,
        private chatDataService: ChatDataService
    ) { }

    async availableQuestion(chatid: bigint) {
        const forbiddenCategory = await this.chatCatService.forbiddenCategory(chatid)
        const publishedQuestion = await this.chatDataService.publishedQuestion(chatid)
        const questions = await this.dbService.question.findMany({
            select: {
                id: true,
            },
            where: {
                category: {
                    notIn: forbiddenCategory.map(item => item.cat_id)
                },
                id: {
                    notIn: publishedQuestion.map(item => item.question_id)
                }
            }
        })

        const randomIndex = Math.floor(Math.random() * (questions.length - 1));
        return questions[randomIndex]
    }
}