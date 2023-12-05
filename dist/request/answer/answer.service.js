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
    create(createAnswerDto) {
        return this.dbService.answer.create({ data: createAnswerDto });
    }
    findAll() {
        return this.dbService.answer.findMany({});
    }
    findOne(id) {
        return this.dbService.answer.findUnique({
            where: {
                id,
            }
        });
    }
    findOneChat(chat_id, questionid, group_id) {
        return this.dbService.answer.findMany({
            where: {
                chat_id,
                questionid,
                group_id,
            }
        });
    }
    update(id, updateAnswerDto) {
        return this.dbService.answer.update({
            where: {
                id,
            },
            data: updateAnswerDto
        });
    }
    remove(id) {
        return this.dbService.answer.delete({
            where: {
                id,
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