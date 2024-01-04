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
let AutoPostService = class AutoPostService {
    constructor(selectQuestionService, selectActivChatService, buildQuestionService, buildStatListService, responsesService, chatDataService, chatService) {
        this.selectQuestionService = selectQuestionService;
        this.selectActivChatService = selectActivChatService;
        this.buildQuestionService = buildQuestionService;
        this.buildStatListService = buildStatListService;
        this.responsesService = responsesService;
        this.chatDataService = chatDataService;
        this.chatService = chatService;
    }
    async publicationInActiveGroup() {
        const chatact = await this.selectActivChatService.activChat();
        if (chatact?.length) {
            for (var key in chatact) {
                const chat = await this.chatService.findByChatId(chatact[key].chat);
                const question = await this.selectQuestionService.availableQuestion(chatact[key].chat);
                if (chat.question_type === 1) {
                    await this.questionTypeImg(question.id, chat);
                }
                if (chat.question_type === 2) {
                    await this.questionTypePoll(question.id, chat);
                }
                if (chat.question_type === 3) {
                    await this.questionTypeText(question.id, chat);
                }
                if (chat.question_type === 4) {
                    await this.questionTypeMixed(question.id, chat);
                }
            }
        }
    }
    async questionTypePoll(question, chat) {
        const questionPoll = await this.buildQuestionService.questionPoll(question, chat.chat, chat.type);
        const response = await this.responsesService.sendPoll(questionPoll);
        if (response) {
            await this.chatDataService.create({
                group: response.chat.id,
                group_type: response.chat.type,
                message_id: response.message_id,
                date: response.date,
                question_id: question,
                poll_id: response.poll.id,
                question_type: "poll"
            });
        }
    }
    async questionTypeImg(question, chat) {
        const questionImg = await this.buildQuestionService.questionImg(question, chat.chat);
        const response = await this.responsesService.sendPhoto(questionImg);
        if (response) {
            await this.chatDataService.create({
                group: response.chat.id,
                group_type: response.chat.type,
                message_id: response.message_id,
                date: response.date,
                question_id: question,
                question_type: "photo"
            });
        }
    }
    async questionTypeText(question, chat) {
        const questionTest = await this.buildQuestionService.questionText(question, chat.chat);
        const response = await this.responsesService.sendMessage(questionTest);
        if (response) {
            await this.chatDataService.create({
                group: response.chat.id,
                group_type: response.chat.type,
                message_id: response.message_id,
                date: response.date,
                question_id: question,
                question_type: "text"
            });
        }
    }
    async questionTypeMixed(question, chat) {
        const lastPost = await this.chatDataService.findTypeLastThreeByChat(chat.chat);
        if (!lastPost.includes('photo')) {
            await this.questionTypeImg(question, chat);
        }
        if (!lastPost.includes('poll')) {
            await this.questionTypePoll(question, chat);
        }
        if (!lastPost.includes('text')) {
            await this.questionTypeText(question, chat);
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
        chat_service_1.ChatService])
], AutoPostService);
//# sourceMappingURL=auto-post.service.js.map