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
const responses_service_1 = require("../responses/responses.service");
const events_interface_1 = require("../request/chat/models/events.interface");
let CallbackQueryService = class CallbackQueryService {
    constructor(callbackAnswers, eventEmitter, chatService, responsesService) {
        this.callbackAnswers = callbackAnswers;
        this.eventEmitter = eventEmitter;
        this.chatService = chatService;
        this.responsesService = responsesService;
    }
    async update(callbackQuery) {
        const data = callbackQuery.data.split("_");
        const event = new events_interface_1.EventInterface();
        event.name = "update";
        event.description = String(callbackQuery.data);
        this.eventEmitter.emit('event', event);
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
            await this.responsesService.sendMessage({
                chat_id: message.from.id,
                text: encodeURI(text),
                reply_markup: replyMarkup
            });
        }
    }
    async member(memberData) {
        const emitText = `
		new_chat_member: ${memberData.new_chat_member.status}\n
		${memberData.chat.id}\n
		@${memberData.chat.username}
		`;
        const event = new events_interface_1.EventInterface();
        event.name = "member";
        event.description = String(memberData.from);
        this.eventEmitter.emit('event', event);
        await this.chatService.verificationExistence(memberData.from);
        if (memberData.new_chat_member.status === "member" ||
            memberData.new_chat_member.status === "administrator") {
            await this.chatService.verificationExistenceChat(memberData.chat, memberData.from);
            console.log('callbackQuery.service - 77: ', memberData.chat.id);
            await fetch(`
				${process.env.SEND_MESSAGE}
				chat_id=${memberData.chat.id}
				&text=${encodeURI("<b>Здравствуйте!</b>\n\nНастроить бота можно по ссылке https://t.me/ViktorinaOnlineBot/app \nили @ViktorinaOnlineBot")}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`);
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
        chat_service_1.ChatService,
        responses_service_1.ResponsesService])
], CallbackQueryService);
//# sourceMappingURL=callbackQuery.service.js.map