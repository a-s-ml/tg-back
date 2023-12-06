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
exports.CallbackAnswerService = void 0;
const common_1 = require("@nestjs/common");
const answer_service_1 = require("../../request/answer/answer.service");
const question_service_1 = require("../../request/question/question.service");
const responses_service_1 = require("../../responses/responses.service");
let CallbackAnswerService = class CallbackAnswerService {
    constructor(answerService, questionService, responsesService) {
        this.answerService = answerService;
        this.questionService = questionService;
        this.responsesService = responsesService;
    }
    async answer(callbackQuery) {
        const data = callbackQuery.data.split('_');
        const checkAnswer = await this.answerService.findOneChat(callbackQuery.from.id, +data[1], callbackQuery.message.chat.id);
        if (checkAnswer.length == 0) {
            const question = await this.questionService.findOne(+data[1]);
            console.log(checkAnswer);
            console.log(checkAnswer.length);
            console.log(data[2]);
            let text;
            let reward;
            if (data[2] == question.answerright) {
                console.log(data[2] + ' = ' + question.answerright);
                reward = question.slog;
                console.log(reward);
                text = `Правильный ответ, добавлено "${reward}" очков`;
            }
            else {
                console.log(data[2] + ' != ' + question.answerright);
                reward = -question.slog;
                console.log(reward);
                text = `Неправильный ответ, добавлено "${reward}" очков`;
            }
            await this.answerService.create({ chat_id: callbackQuery.from.id, questionid: +data[1], group_id: callbackQuery.message.chat.id, choice: +data[2], reward: reward });
            const res = {
                callback_query_id: callbackQuery.id,
                text: text
            };
            console.log(res);
            await this.responsesService.answerCallbackQuery(res);
        }
    }
};
exports.CallbackAnswerService = CallbackAnswerService;
exports.CallbackAnswerService = CallbackAnswerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [answer_service_1.AnswerService,
        question_service_1.QuestionService,
        responses_service_1.ResponsesService])
], CallbackAnswerService);
//# sourceMappingURL=callbackAnswer.service.js.map