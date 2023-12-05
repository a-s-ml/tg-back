"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectQuestion = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let SelectQuestion = class SelectQuestion {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async publishedQuestion(chatid) {
        const arrIdPublishedQuestion = await this.dbService.chat_data.findMany({
            select: {
                question_id: true,
            },
            where: {
                group_id: chatid
            }
        });
        let publishedQuestion = [];
        arrIdPublishedQuestion.map(item => {
            publishedQuestion.push(item.question_id);
        });
        return publishedQuestion;
    }
    async forbiddenCategory(chatid) {
        const arrIdForbiddenCategory = await this.dbService.chat_cat.findMany({
            select: {
                cat_id: true,
            },
            where: {
                chat_id: chatid
            }
        });
        let forbiddenCategory = [];
        arrIdForbiddenCategory.map(item => {
            forbiddenCategory.push(item.cat_id);
        });
        return forbiddenCategory;
    }
    async countAvailableQuestion(chatid) {
        const forbiddenCategory = await this.forbiddenCategory(chatid);
        const publishedQuestion = await this.publishedQuestion(chatid);
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
    async availableQuestion(chatid) {
        const forbiddenCategory = await this.forbiddenCategory(chatid);
        const publishedQuestion = await this.publishedQuestion(chatid);
        const itemCount = await this.countAvailableQuestion(chatid);
        const randomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
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
};
exports.SelectQuestion = SelectQuestion;
exports.SelectQuestion = SelectQuestion = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], SelectQuestion);
//# sourceMappingURL=select-questions.service.js.map