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
exports.BuildQuestionService = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("../../request/question/question.service");
const build_keyboard_service_1 = require("../keyboard/build-keyboard.service");
let BuildQuestionService = class BuildQuestionService {
    constructor(questionService, buildKeyboardService) {
        this.questionService = questionService;
        this.buildKeyboardService = buildKeyboardService;
    }
    async questionText(id) {
        const question = await this.questionService.findOne(id);
        const reply_markup = await this.buildKeyboardService.questionInlineKeboard(question.id);
        const url = {
            chat_id: 521884639,
            text: encodeURI(question.text),
            reply_markup: reply_markup,
            disable_web_page_preview: true,
            parse_mode: 'HTML'
        };
        return url;
    }
    async questionPoll(id) {
        const question = await this.questionService.findOne(id);
        const url = {
            chat_id: 521884639,
            question: encodeURI(question.text),
            options: [question.answer1, question.answer2, question.answer3, question.answer4],
            correct_option_id: question.answerright
        };
        return url;
    }
    async questionImg(id) {
        const question = await this.questionService.findOne(id);
        const reply_markup = await this.buildKeyboardService.questionInlineKeboard(question.id);
        const url = {
            chat_id: 521884639,
            caption: encodeURI(question.text),
            photo: question.img,
            reply_markup: reply_markup
        };
        return url;
    }
};
exports.BuildQuestionService = BuildQuestionService;
exports.BuildQuestionService = BuildQuestionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [question_service_1.QuestionService,
        build_keyboard_service_1.BuildKeyboardService])
], BuildQuestionService);
//# sourceMappingURL=build-question.service.js.map