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
const responses_service_1 = require("../responses/responses.service");
const user_service_1 = require("../request/user/user.service");
let AutoPostService = class AutoPostService {
    constructor(selectQuestionService, selectActivChatService, buildQuestionService, responsesService, userService) {
        this.selectQuestionService = selectQuestionService;
        this.selectActivChatService = selectActivChatService;
        this.buildQuestionService = buildQuestionService;
        this.responsesService = responsesService;
        this.userService = userService;
    }
    async publicationInActiveGroup() {
        const chatact = await this.selectActivChatService.activChat();
        for (var key in chatact) {
            const chat = await this.userService.findByChatId(chatact[key].chat);
            const question = await this.selectQuestionService.availableQuestion(chatact[key].chat);
            console.log(chat.question_img);
            switch (chat.question_img) {
                case 0:
                    const questionTest = await this.buildQuestionService.questionText(question.id);
                    await this.responsesService.sendMessage(questionTest);
                    break;
                case 1:
                    const questionImg = await this.buildQuestionService.questionImg(question.id);
                    await this.responsesService.sendPhoto(questionImg);
                    break;
                case 2:
                    const questionPoll = await this.buildQuestionService.questionPoll(question.id);
                    await this.responsesService.sendPoll(questionPoll);
                    break;
                default:
                    break;
            }
        }
    }
};
exports.AutoPostService = AutoPostService;
exports.AutoPostService = AutoPostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [select_questions_service_1.SelectQuestionService,
        select_activ_chat_service_1.SelectActivChatService,
        build_question_service_1.BuildQuestionService,
        responses_service_1.ResponsesService,
        user_service_1.UserService])
], AutoPostService);
//# sourceMappingURL=auto-post.service.js.map