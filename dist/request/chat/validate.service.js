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
exports.ValidateService = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const crypto_1 = require("crypto");
const question_service_1 = require("../question/question.service");
const answer_service_1 = require("../answer/answer.service");
require("dotenv/config");
const chat_active_service_1 = require("../chat-active/chat-active.service");
let ValidateService = class ValidateService {
    constructor(chatService, questionService, answerService, chatActiveService) {
        this.chatService = chatService;
        this.questionService = questionService;
        this.answerService = answerService;
        this.chatActiveService = chatActiveService;
    }
    async validateUser(initData) {
        console.log(initData);
        const urlParams = new URLSearchParams(initData);
        const hash = urlParams.get("hash");
        urlParams.delete("hash");
        urlParams.sort();
        const UserData = {
            query_id: urlParams.get("query_id"),
            user: JSON.parse(urlParams.get("user")),
            auth_date: urlParams.get("auth_date")
        };
        const groupsAll = await this.chatService.countByReferal(UserData.user.id);
        const groupsActive = await this.chatActiveService.countActiveByReferal(UserData.user.id);
        const groupsProgress = { groupsAll, groupsActive };
        const questionsAll = await this.questionService.countByChatId(UserData.user.id);
        const questionsModerate = await this.questionService.countModerateByChatId(UserData.user.id);
        const questionsProgress = { questionsAll, questionsModerate };
        const answersAll = await this.answerService.countByChatId(UserData.user.id);
        const answersRight = await this.answerService.countRiightByChatId(UserData.user.id);
        const answersProgress = { answersAll, answersRight };
        let dataCheckString = "";
        for (const [key, value] of urlParams.entries()) {
            dataCheckString += `${key}=${value}\n`;
        }
        dataCheckString = dataCheckString.slice(0, -1);
        const secret = (0, crypto_1.createHmac)("sha256", "WebAppData").update(process.env.TOKEN ?? "");
        const calculatedHash = (0, crypto_1.createHmac)("sha256", secret.digest())
            .update(dataCheckString)
            .digest("hex");
        const validate = calculatedHash === hash;
        let response;
        let ProgressData;
        ProgressData = { groupsProgress, questionsProgress, answersProgress };
        return response = { validate, UserData, ProgressData };
    }
};
exports.ValidateService = ValidateService;
exports.ValidateService = ValidateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        question_service_1.QuestionService,
        answer_service_1.AnswerService,
        chat_active_service_1.ChatActiveService])
], ValidateService);
//# sourceMappingURL=validate.service.js.map