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
const build_statList_service_1 = require("../constructors/statList/build-statList.service");
const chat_service_1 = require("../request/chat/chat.service");
const chat_data_service_1 = require("../request/chat-data/chat-data.service");
const chat_active_service_1 = require("../request/chat-active/chat-active.service");
let AutoPostService = class AutoPostService {
    constructor(selectQuestionService, selectActivChatService, buildQuestionService, buildStatListService, responsesService, chatDataService, chatService, chatActiveService) {
        this.selectQuestionService = selectQuestionService;
        this.selectActivChatService = selectActivChatService;
        this.buildQuestionService = buildQuestionService;
        this.buildStatListService = buildStatListService;
        this.responsesService = responsesService;
        this.chatDataService = chatDataService;
        this.chatService = chatService;
        this.chatActiveService = chatActiveService;
    }
    async publicationInActiveGroup() {
        const chatact = await this.selectActivChatService.activChat();
        console.log(chatact.length);
        if (chatact.length > 0) {
            for (var key in chatact) {
                const chat = await this.chatService.findByChatId(chatact[key].chat);
                const question = await this.selectQuestionService.availableQuestion(chatact[key].chat);
                if (chat.question_type === 3) {
                    const questionTest = await this.buildQuestionService.questionText(question.id, chatact[key].chat);
                    const response = await this.responsesService.sendMessage(questionTest);
                    if (response) {
                        console.log(response);
                        await this.chatDataService.create({
                            group: response.result.chat.id,
                            group_type: response.result.chat.type,
                            message_id: response.result.message_id,
                            result: 1,
                            date: response.result.date,
                            question_id: question.id,
                            question_type: "_" + chat.question_type
                        });
                    }
                    else {
                        await this.chatActiveService.remove(chatact[key].chat);
                    }
                }
                if (chat.question_type === 1) {
                    const questionImg = await this.buildQuestionService.questionImg(question.id, chatact[key].chat);
                    const response = await this.responsesService.sendPhoto(questionImg);
                    if (response) {
                        console.log(response);
                        await this.chatDataService.create({
                            group: response.result.chat.id,
                            group_type: response.result.chat.type,
                            message_id: response.result.message_id,
                            result: 1,
                            date: response?.result.date,
                            question_id: question.id,
                            question_type: "_" + chat.question_type
                        });
                    }
                    else {
                        await this.chatActiveService.remove(chatact[key].chat);
                    }
                }
                if (chat.question_type === 2) {
                    const questionPoll = await this.buildQuestionService.questionPoll(question.id, chatact[key].chat);
                    const response = await this.responsesService.sendPoll(questionPoll);
                    if (response) {
                        console.log(response);
                        await this.chatDataService.create({
                            group: response.result.chat.id,
                            group_type: response.result.chat.type,
                            message_id: response.result.message_id,
                            result: 1,
                            date: response.result.date,
                            question_id: question.id,
                            poll_id: response.result.poll.id,
                            question_type: "_" + chat.question_type
                        });
                    }
                    else {
                        await this.chatActiveService.remove(chatact[key].chat);
                    }
                }
            }
        }
    }
    async publicationInActiveGroupStat() {
        const chatact = await this.selectActivChatService.activChat();
        for (var key in chatact) {
            const stat = await this.buildStatListService.statStandart(chatact[key].chat);
            await this.responsesService.sendMessage(stat);
        }
    }
};
exports.AutoPostService = AutoPostService;
exports.AutoPostService = AutoPostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [select_questions_service_1.SelectQuestionService,
        select_activ_chat_service_1.SelectActivChatService,
        build_question_service_1.BuildQuestionService,
        build_statList_service_1.BuildStatListService,
        responses_service_1.ResponsesService,
        chat_data_service_1.ChatDataService,
        chat_service_1.ChatService,
        chat_active_service_1.ChatActiveService])
], AutoPostService);
//# sourceMappingURL=auto-post.service.js.map