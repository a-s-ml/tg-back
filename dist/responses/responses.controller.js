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
exports.ResponsesController = void 0;
const common_1 = require("@nestjs/common");
const responses_service_1 = require("./responses.service");
const answerCallbackQuery_dto_1 = require("../webhook-tg/dto/answerCallbackQuery.dto");
let ResponsesController = class ResponsesController {
    constructor(responsesService) {
        this.responsesService = responsesService;
    }
    sendMessage(message) {
        return this.responsesService.sendMessage(message);
    }
    answerCallbackQuery(answerCallbackQuery) {
        return this.responsesService.answerCallbackQuery(answerCallbackQuery);
    }
};
exports.ResponsesController = ResponsesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ResponsesController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answerCallbackQuery_dto_1.AnswerCallbackQueryDto]),
    __metadata("design:returntype", void 0)
], ResponsesController.prototype, "answerCallbackQuery", null);
exports.ResponsesController = ResponsesController = __decorate([
    (0, common_1.Controller)("responses"),
    __metadata("design:paramtypes", [responses_service_1.ResponsesService])
], ResponsesController);
//# sourceMappingURL=responses.controller.js.map