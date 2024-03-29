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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
const client_1 = require("@prisma/client");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    create(createQuestionDto) {
        return this.questionService.create(createQuestionDto);
    }
    findAll() {
        return this.questionService.findAll();
    }
    findByChatId(chat) {
        return this.questionService.findByChatId(chat);
    }
    findOne(id) {
        return this.questionService.findOne(+id);
    }
    update(id, updateQuestionDto) {
        return this.questionService.update(+id, updateQuestionDto);
    }
    countReward(id) {
        return this.questionService.countReward(+id);
    }
    count(id) {
        return this.questionService.count(+id);
    }
    remove(id) {
        return this.questionService.remove(+id);
    }
};
exports.QuestionController = QuestionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("findByChatId/:chat"),
    __param(0, (0, common_1.Param)("chat")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BigInt]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findByChatId", null);
__decorate([
    (0, common_1.Get)("findById/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("countReward/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "countReward", null);
__decorate([
    (0, common_1.Get)("count/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "count", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "remove", null);
exports.QuestionController = QuestionController = __decorate([
    (0, common_1.Controller)("question"),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
//# sourceMappingURL=question.controller.js.map