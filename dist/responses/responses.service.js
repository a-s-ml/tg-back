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
exports.ResponsesService = void 0;
require("dotenv/config");
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_interface_1 = require("../request/chat/models/events.interface");
let ResponsesService = class ResponsesService {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    async sendMessage(message) {
        try {
            const response = await axios_1.default.get(`
			${process.env.SEND_MESSAGE}
			chat_id=${message.chat_id}
			&text=${message.text}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`);
            console.log('responses.service - 30: ', response.data.result);
            const event = new events_interface_1.EventInterface();
            event.name = "Message.send";
            event.description = String(response.data.result);
            this.eventEmitter.emit('message.send', event);
            return response.data.result;
        }
        catch (error) {
            console.log('responses.service - 33: ', error.response.data);
            const eventText = `
			errorResponse.editMessageText\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`;
            await this.eventEmitter.emitAsync("errorResponse.sendMessage", eventText);
        }
    }
    async editMessageText(message) {
        try {
            const response = await axios_1.default.get(`
			${process.env.SEND_MESSAGE}
			message_id=${message.message_id}
			&text=${message.text}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`);
            const event = new events_interface_1.EventInterface();
            event.name = "editMessageText.send";
            event.description = String(response.data.result);
            this.eventEmitter.emit('message.send', event);
            return response.data.result;
        }
        catch (error) {
            const eventText = `
			errorResponse.editMessageText\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`;
            await this.eventEmitter.emitAsync("errorResponse.editMessageText", eventText);
        }
    }
    async sendPoll(message) {
        try {
            const response = await axios_1.default.get(`
			${process.env.SEND_POLL}
			chat_id=${message.chat_id}
			&question=${message.question}
			&options=${JSON.stringify(message.options)}
			&correct_option_id=${message.correct_option_id}
			&type=quiz
			&is_anonymous=${message.is_anonymous}
			`);
            const event = new events_interface_1.EventInterface();
            event.name = "Poll.send";
            event.description = String(response.data.result);
            this.eventEmitter.emit('message.send', event);
            return response.data.result;
        }
        catch (error) {
            const eventText = `
			errorResponse.sendPoll\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`;
            await this.eventEmitter.emitAsync("errorResponse.sendPoll", eventText);
        }
    }
    async editMessageCaption(message) {
        try {
            const response = await axios_1.default.get(`
			${process.env.SEND_POLL}
			message_id=${message.message_id}
			&caption=${message.caption}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`);
            return response.data.result;
        }
        catch (error) {
            const eventText = `
			errorResponse.editMessageCaption\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`;
            await this.eventEmitter.emitAsync("errorResponse.editMessageCaption", eventText);
        }
    }
    async sendPhoto(message) {
        try {
            const response = await axios_1.default.get(`
			${process.env.SEND_PHOTO}
			chat_id=${message.chat_id}
			&caption=${message.caption}
			&photo=${message.photo}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`);
            const event = new events_interface_1.EventInterface();
            event.name = "Photo.send";
            event.description = String(response.data.result);
            this.eventEmitter.emit('message.send', event);
            return response.data.result;
        }
        catch (error) {
            const eventText = `
			errorResponse.sendPhoto\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`;
            await this.eventEmitter.emitAsync("errorResponse.sendPhoto", eventText);
        }
    }
    async editMessageReplyMarkup(message) {
        try {
            const response = await axios_1.default.get(`
			${process.env.SEND_PHOTO}
			message_id=${message.message_id}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`);
            return response.data.result;
        }
        catch (error) {
            const eventText = `
			errorResponse.editMessageReplyMarkup\n
			chat_id: ${message.chat_id}\n
			error: ${JSON.stringify(error.response.data)}
			`;
            await this.eventEmitter.emitAsync("errorResponse.editMessageReplyMarkup", eventText);
        }
    }
    async answerCallbackQuery(answerCallbackQuery) {
        try {
            const response = await axios_1.default.get(`
			${process.env.SEND_ANSWER_CALLBACKQUERY}
			callback_query_id=${answerCallbackQuery.callback_query_id}
			&text=${answerCallbackQuery.text}
			&show_alert=true
			`);
            const event = new events_interface_1.EventInterface();
            event.name = "answerCallbackQuery.send";
            event.description = String(response.data.result);
            this.eventEmitter.emit('message.send', event);
            return response.data.result;
        }
        catch (error) {
            const eventText = `
			errorResponse.answerCallback\n
			callback_query_id: ${answerCallbackQuery.callback_query_id}\n
			error: ${JSON.stringify(error.response.data)}
			`;
            await this.eventEmitter.emitAsync("errorResponse.answerCallback", eventText);
        }
    }
    async sendChatAction(chat, action) {
        try {
            const response = await axios_1.default.get(`
			${process.env.SEND_ACTION}
			chat_id=${chat}
			&action=${action}
			`);
            return response.data;
        }
        catch (error) {
            const eventText = `
			errorResponse.editMessageText\n
			chat_id: ${chat}\n
			error: ${JSON.stringify(error.response.data)}
			`;
            await this.eventEmitter.emitAsync("errorResponse.sendMessage", eventText);
            return error.response.data;
        }
    }
};
exports.ResponsesService = ResponsesService;
exports.ResponsesService = ResponsesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], ResponsesService);
//# sourceMappingURL=responses.service.js.map