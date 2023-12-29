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
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../../db/db.service");
let QuestionService = class QuestionService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(createQuestionDto) {
        return await this.dbService.question.create({ data: createQuestionDto });
    }
    async findAll() {
        return await this.dbService.question.findMany({});
    }
    async findOne(id) {
        return await this.dbService.question.findUnique({
            where: {
                id
            }
        });
    }
    async findOneAnswers(id) {
        return await this.dbService.question.findUnique({
            select: {
                answer1: true,
                answer2: true,
                answer3: true,
                answer4: true
            },
            where: {
                id
            }
        });
    }
    async update(id, updateQuestionDto) {
        return await this.dbService.question.update({
            where: {
                id
            },
            data: updateQuestionDto
        });
    }
    async remove(id) {
        return await this.dbService.question.delete({
            where: {
                id
            }
        });
    }
    async countByChatId(chat) {
        return await this.dbService.question.count({
            where: {
                chat: chat
            }
        });
    }
    async countModerateByChatId(chat) {
        return await this.dbService.question.count({
            where: {
                chat: chat,
                mod: {
                    gt: 0
                }
            }
        });
    }
    async countReward(question) {
        const count = await this.dbService.answer.count({
            where: {
                question
            }
        });
        const inc = await this.dbService.answer.count({
            where: {
                question,
                reward: {
                    gt: 0
                }
            }
        });
        return 100 - Math.round((inc / count) * 100);
    }
    async count(question) {
        return await this.dbService.answer.count({
            where: {
                question
            }
        });
    }
};
exports.QuestionService = QuestionService;
exports.QuestionService = QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], QuestionService);
//# sourceMappingURL=question.service.js.map