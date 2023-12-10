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
exports.SelectActivChatService = void 0;
const common_1 = require("@nestjs/common");
const time_service_1 = require("../request/time/time.service");
const chat_active_service_1 = require("../request/chat-active/chat-active.service");
const chat_data_service_1 = require("../request/chat-data/chat-data.service");
const chat_service_1 = require("../request/chat/chat.service");
let SelectActivChatService = class SelectActivChatService {
    constructor(chatActiveService, chatDataService, chatService, timeService) {
        this.chatActiveService = chatActiveService;
        this.chatDataService = chatDataService;
        this.chatService = chatService;
        this.timeService = timeService;
    }
    async activChat() {
        const chatact = await this.chatActiveService.findAll();
        let actiality = [];
        for (var key in chatact) {
            let lastPost = await this.chatDataService.findLastChat(chatact[key].chat);
            let chat = await this.chatService.findByChatId(chatact[key].chat);
            let period = await this.timeService.findOne(chat.time);
            let currentTime = Math.round(Math.floor(new Date().getTime()) / 1000);
            let lastPostTime = lastPost[0].date;
            let timeToLast = currentTime - lastPostTime;
            let periodTime = period.period;
            if (timeToLast > periodTime) {
                actiality.push(chatact[key]);
            }
        }
        console.log(actiality);
        return [
            { id: 2, chat: -1001635376490n }
        ];
    }
};
exports.SelectActivChatService = SelectActivChatService;
exports.SelectActivChatService = SelectActivChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chat_active_service_1.ChatActiveService,
        chat_data_service_1.ChatDataService,
        chat_service_1.ChatService,
        time_service_1.TimeService])
], SelectActivChatService);
//# sourceMappingURL=select-activ-chat.service.js.map