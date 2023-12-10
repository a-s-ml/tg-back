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
exports.CallbackQueryService = void 0;
const common_1 = require("@nestjs/common");
const callbackAnswer_service_1 = require("./callbackQuery/callbackAnswer.service");
const responses_service_1 = require("../responses/responses.service");
const chat_service_1 = require("../request/chat/chat.service");
let CallbackQueryService = class CallbackQueryService {
    constructor(callbackAnswers, responsesService, chatService) {
        this.callbackAnswers = callbackAnswers;
        this.responsesService = responsesService;
        this.chatService = chatService;
    }
    async update(callbackQuery) {
        const data = callbackQuery.data.split("_");
        switch (data[0]) {
            case "answer":
                return await this.callbackAnswers.answer(callbackQuery);
            default:
                break;
        }
    }
    async pollAnswer(pollAnswer) {
        return await this.callbackAnswers.pollAnswer(pollAnswer);
    }
    async message(message) {
        if (message.text === "/account" || message.text === "/start") {
            const text = `
			<b>Здравствуйте!</b>\n\n
			Сейчас проходит оптимизация и глобальное обновление бота.\n
			Приносим свои извинения. \nПолный текущий функционал, а так же дополнительные функции станут доступны 15.12.2023.\n\n
			На данный момент вы можете обратиться к @a_s_ml и вам сделают настройки удалённо по вашему желанию.\n\n
			Бот всё ещё отправляет вопросы в активные группы и вы можете на них отвечать
			`;
            await fetch(`
				${process.env.SEND_MESSAGE}
				chat_id=${message.from.id}
				&text=${encodeURI(text)}
				&parse_mode=HTML
				`);
        }
    }
    async member(memberData) {
        await this.responsesService.sendLogToAdmin(`new_chat_member: ${memberData.new_chat_member.status}\n${memberData.chat.id}\n@${memberData.chat.username}`);
        await this.chatService.verificationExistence(memberData.from);
        if (memberData.new_chat_member.status === "member" ||
            memberData.new_chat_member.status === "administrator") {
            await this.chatService.verificationExistenceChat(memberData.chat, memberData.from);
        }
        if (memberData.new_chat_member.status === "left") {
            await this.responsesService.sendLogToAdmin(`left group: ${memberData.chat.id}`);
        }
    }
};
exports.CallbackQueryService = CallbackQueryService;
exports.CallbackQueryService = CallbackQueryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [callbackAnswer_service_1.CallbackAnswerService,
        responses_service_1.ResponsesService,
        chat_service_1.ChatService])
], CallbackQueryService);
//# sourceMappingURL=callbackQuery.service.js.map