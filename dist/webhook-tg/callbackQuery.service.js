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
const chat_service_1 = require("../request/chat/chat.service");
const event_emitter_1 = require("@nestjs/event-emitter");
let CallbackQueryService = class CallbackQueryService {
    constructor(callbackAnswers, eventEmitter, chatService) {
        this.callbackAnswers = callbackAnswers;
        this.eventEmitter = eventEmitter;
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
            await this.chatService.verificationExistence(message.from);
            const replyMarkup = {
                inline_keyboard: [
                    [
                        {
                            text: "Настройки ViktorinaOnlineBot",
                            web_app: {
                                url: `https://80q.ru/`
                            }
                        }
                    ]
                ]
            };
            const text = `
			<b>Здравствуйте!</b>\n\nСейчас проходит оптимизация и глобальное обновление бота.\nСвои пожелания по функционалу бота Вы можете отправить разработчику через приложение...
			`;
            await fetch(`
				${process.env.SEND_MESSAGE}
				chat_id=${message.from.id}
				&text=${encodeURI(text)}
				&reply_markup=${JSON.stringify(replyMarkup)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`);
        }
    }
    async member(memberData) {
        const emitText = `
		new_chat_member: ${memberData.new_chat_member.status}\n
		${memberData.chat.id}\n
		@${memberData.chat.username}
		`;
        await this.eventEmitter.emitAsync("newChatMember.chatMember", emitText);
        await this.chatService.verificationExistence(memberData.from);
        if (memberData.new_chat_member.status === "member" ||
            memberData.new_chat_member.status === "administrator") {
            await this.chatService.verificationExistenceChat(memberData.chat, memberData.from);
            const replyMarkup = {
                inline_keyboard: [
                    [
                        {
                            text: "Настройки ViktorinaOnlineBot",
                            web_app: {
                                url: `https://80q.ru/`
                            }
                        }
                    ]
                ]
            };
            const text = `
			<b>Здравствуйте!</b>\n\nСейчас проходит оптимизация и глобальное обновление бота.\nСвои пожелания по функционалу бота Вы можете отправить разработчику через приложение...
			`;
            const resadd = await fetch(`
				${process.env.SEND_MESSAGE}
				chat_id=${memberData.chat.id}
				&text=${encodeURI(text)}
				&reply_markup=${JSON.stringify(replyMarkup)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`);
            console.log(resadd);
        }
        if (memberData.new_chat_member.status === "left" ||
            memberData.new_chat_member.status === "kicked" ||
            memberData.new_chat_member.status === "banned") {
            await this.chatService.removeByChat(memberData.chat.id);
        }
    }
};
exports.CallbackQueryService = CallbackQueryService;
exports.CallbackQueryService = CallbackQueryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [callbackAnswer_service_1.CallbackAnswerService,
        event_emitter_1.EventEmitter2,
        chat_service_1.ChatService])
], CallbackQueryService);
//# sourceMappingURL=callbackQuery.service.js.map