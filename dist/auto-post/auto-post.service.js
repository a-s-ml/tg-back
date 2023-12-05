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
exports.AutoPostService = void 0;
const common_1 = require("@nestjs/common");
const select_questions_service_1 = require("./select-questions.service");
const select_activ_chat_service_1 = require("./select-activ-chat.service");
const build_question_service_1 = require("../constructors/questions/build-question.service");
require("dotenv/config");
let AutoPostService = class AutoPostService {
    constructor(selectQuestionService, selectActivChatService, buildQuestionService) {
        this.selectQuestionService = selectQuestionService;
        this.selectActivChatService = selectActivChatService;
        this.buildQuestionService = buildQuestionService;
    }
    async publicationInActiveGroup() {
        const chatact = await this.selectActivChatService.activChat();
        for (var key in chatact) {
            const t0 = performance.now();
            const question = await this.selectQuestionService.availableQuestion(chatact[key].chat);
            const url = await this.buildQuestionService.questionText(question.id);
            const url2 = `${process.env.SEND_MESSAGE}chat_id=${url.chat_id}&text=${encodeURI(url.text)}&reply_markup=${JSON.stringify(url.reply_markup)}`;
            console.log(url2);
            fetch(url2);
            const t1 = performance.now();
            console.log(t1 - t0, 'milliseconds');
        }
    }
};
exports.AutoPostService = AutoPostService;
exports.AutoPostService = AutoPostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [select_questions_service_1.SelectQuestionService,
        select_activ_chat_service_1.SelectActivChatService,
        build_question_service_1.BuildQuestionService])
], AutoPostService);
//# sourceMappingURL=auto-post.service.js.map