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
exports.SelectQuestionService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
const chat_category_service_1 = require("../request/chat-category/chat-category.service");
const chat_data_service_1 = require("../request/chat-data/chat-data.service");
let SelectQuestionService = class SelectQuestionService {
    constructor(dbService, chatCategoryService, chatDataService) {
        this.dbService = dbService;
        this.chatCategoryService = chatCategoryService;
        this.chatDataService = chatDataService;
    }
    async availableQuestion(chatid) {
        const forbiddenCategory = await this.chatCategoryService.findChat(chatid);
        const publishedQuestion = await this.chatDataService.findAllByChat(chatid);
        if (!forbiddenCategory?.length) {
            forbiddenCategory.push({ category: 1001 });
        }
        if (!publishedQuestion?.length) {
            publishedQuestion.push({ question_id: 1 });
        }
        const questions = await this.dbService.question.findMany({
            select: {
                id: true
            },
            where: {
                category: {
                    notIn: forbiddenCategory.map(item => item.category)
                },
                id: {
                    notIn: publishedQuestion.map(item => item.question_id)
                },
                mod: 2,
                isactual: 2
            }
        });
        if (questions?.length) {
            const randomIndex = Math.floor(Math.random() * (questions.length - 1));
            return questions[randomIndex];
        }
    }
    async countAvailableQuestionByChatId(chatid) {
        const forbiddenCategory = await this.chatCategoryService.findChat(chatid);
        const publishedQuestion = await this.chatDataService.findAllByChat(chatid);
        forbiddenCategory.push({ category: 1001 });
        const countQuestions = await this.dbService.question.count({
            where: {
                category: {
                    notIn: forbiddenCategory.map(item => item.category)
                },
                id: {
                    notIn: publishedQuestion.map(item => item.question_id)
                },
                mod: 2,
                isactual: 2
            }
        });
        return countQuestions;
    }
};
exports.SelectQuestionService = SelectQuestionService;
exports.SelectQuestionService = SelectQuestionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        chat_category_service_1.ChatCategoryService,
        chat_data_service_1.ChatDataService])
], SelectQuestionService);
//# sourceMappingURL=select-questions.service.js.map