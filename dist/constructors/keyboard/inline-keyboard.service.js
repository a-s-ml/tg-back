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
exports.InlineKeyboardService = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("../../request/question/question.service");
let InlineKeyboardService = class InlineKeyboardService {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async questionInlineKeboard(id) {
        const answers = await this.questionService.findOneAnswers(id);
        const replyMarkup = {
            resize_keyboard: true,
            inline_keyboard: [
                [
                    {
                        text: answers.answer1,
                        callback_data: `answer_${id}_1`
                    }
                ],
                [
                    {
                        text: answers.answer2,
                        callback_data: `answer_${id}_2`
                    }
                ],
                [
                    {
                        text: answers.answer3,
                        callback_data: `answer_${id}_3`
                    }
                ],
                [
                    {
                        text: answers.answer4,
                        callback_data: `answer_${id}_4`
                    }
                ]
            ]
        };
        return replyMarkup;
    }
};
exports.InlineKeyboardService = InlineKeyboardService;
exports.InlineKeyboardService = InlineKeyboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], InlineKeyboardService);
//# sourceMappingURL=inline-keyboard.service.js.map