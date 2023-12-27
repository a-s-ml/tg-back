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
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../../db/db.service");
let AnswerService = class AnswerService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(createAnswerDto) {
        return await this.dbService.answer.create({ data: createAnswerDto });
    }
    async findAll() {
        return await this.dbService.answer.findMany({});
    }
    async countByChatId(chat) {
        return await this.dbService.answer.count({
            where: {
                chat: chat
            }
        });
    }
    async findByChat(chat, question, group) {
        return await this.dbService.answer.findMany({
            where: {
                chat,
                question,
                group
            }
        });
    }
    async getStatChat(group) {
        const date = new Date();
        const gte = date.setFullYear(new Date().getFullYear(), new Date().getMonth(), 1);
        return await this.dbService.answer.groupBy({
            by: ["chat"],
            where: {
                group,
                date: {
                    gte: new Date(gte),
                    lte: new Date()
                }
            },
            _sum: {
                reward: true
            },
            _count: {
                id: true
            },
            orderBy: {
                _sum: {
                    reward: "desc"
                }
            },
            take: 15
        });
    }
    async update(id, updateAnswerDto) {
        return await this.dbService.answer.update({
            where: {
                id
            },
            data: updateAnswerDto
        });
    }
    async remove(id) {
        return await this.dbService.answer.delete({
            where: {
                id
            }
        });
    }
};
exports.AnswerService = AnswerService;
exports.AnswerService = AnswerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], AnswerService);
//# sourceMappingURL=answer.service.js.map