import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class SelectQuestion {

    constructor(
        private readonly dbService: DbService
    ) { }

    // опубликованные вопросы из chat_data
    async publishedQuestion(chatid: bigint) {
        const arrIdPublishedQuestion = await this.dbService.chat_data.findMany({
            select: {
                question_id: true,
            },
            where: {
                group_id: chatid
            }
        });

        // из объекта в массив
        let publishedQuestion = [];
        arrIdPublishedQuestion.map(item => {
            publishedQuestion.push(item.question_id)
        })
        //
        return publishedQuestion
    }

    // запрещённые категорие в группе из chat_cat

    async forbiddenCategory(chatid: bigint) {
        const arrIdForbiddenCategory = await this.dbService.chat_cat.findMany({
            select: {
                cat_id: true,
            },
            where: {
                chat_id: chatid
            }
        });

        // из объекта в массив 
        let forbiddenCategory = [];
        arrIdForbiddenCategory.map(item => {
            forbiddenCategory.push(item.cat_id)
        })
        //
        return forbiddenCategory
    }

    // подсчет количества всех возможных вопросов для группы

    async countAvailableQuestion(chatid: bigint) {
        const forbiddenCategory = await this.forbiddenCategory(chatid)
        const publishedQuestion = await this.publishedQuestion(chatid)
        return await this.dbService.question.count({
            where: {
                category: {
                    notIn: forbiddenCategory
                },
                id: {
                    notIn: publishedQuestion
                }
            }
        });
    }

    // выборка случайного вопроса из списка всех возможных вопросов
    async availableQuestion(chatid: bigint) {
        const forbiddenCategory = await this.forbiddenCategory(chatid)
        const publishedQuestion = await this.publishedQuestion(chatid)
        const itemCount = await this.countAvailableQuestion(chatid);

        const randomNumber = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return await this.dbService.question.findMany({
            take: 1,
            skip: randomNumber(0, itemCount - 1),
            select: {
                id: true,
            },
            where: {
                category: {
                    notIn: forbiddenCategory
                },
                id: {
                    notIn: publishedQuestion
                }
            }
        });
    }
}