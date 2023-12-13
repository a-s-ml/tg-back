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
const MessageTgEvent_interface_1 = require("./interfaces/MessageTgEvent.interface");
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
            await this.eventEmitter.emitAsync("successResponse.sendMessage", new MessageTgEvent_interface_1.MessageTgEvent({
                type: "sendMessage",
                message: message,
                response: response.data.result
            }));
            return response.data.result;
        }
        catch (error) {
            await this.eventEmitter.emitAsync("errorResponse.answerCallback", error.response.data, message);
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
            await this.eventEmitter.emitAsync("successResponse.editMessageText", new MessageTgEvent_interface_1.MessageTgEvent({
                type: "editMessageText",
                message: message,
                response: response.data.result
            }));
            return response.data.result;
        }
        catch (error) {
            await this.eventEmitter.emitAsync("errorResponse.answerCallback", error.response.data, message);
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
            await this.eventEmitter.emitAsync("successResponse.sendPoll", new MessageTgEvent_interface_1.MessageTgEvent({
                type: "sendPoll",
                message: message,
                response: response.data.result
            }));
            return response.data.result;
        }
        catch (error) {
            await this.eventEmitter.emitAsync("errorResponse.answerCallback", error.response.data, message);
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
            await this.eventEmitter.emitAsync("successResponse.editMessageText", new MessageTgEvent_interface_1.MessageTgEvent({
                type: "editMessageCaption",
                message: message,
                response: response.data.result
            }));
            return response.data.result;
        }
        catch (error) {
            await this.eventEmitter.emitAsync("errorResponse.answerCallback", error.response.data, message);
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
            await this.eventEmitter.emitAsync("successResponse.sendPhoto", new MessageTgEvent_interface_1.MessageTgEvent({
                type: "sendPhoto",
                message: message,
                response: response.data.result
            }));
            return response.data.result;
        }
        catch (error) {
            await this.eventEmitter.emitAsync("errorResponse.answerCallback", error.response.data, message);
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
            await this.eventEmitter.emitAsync("successResponse.editMessageReplyMarkup", new MessageTgEvent_interface_1.MessageTgEvent({
                type: "editMessageReplyMarkup",
                message: message,
                response: response.data.result
            }));
            return response.data.result;
        }
        catch (error) {
            await this.eventEmitter.emitAsync("errorResponse.answerCallback", error.response.data, message);
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
            await this.eventEmitter.emitAsync("successResponse.answerCallback", response.data.result, answerCallbackQuery);
            return response.data.result;
        }
        catch (error) {
            await this.eventEmitter.emitAsync("errorResponse.answerCallback", error.response.data, answerCallbackQuery);
        }
    }
};
exports.ResponsesService = ResponsesService;
exports.ResponsesService = ResponsesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], ResponsesService);
//# sourceMappingURL=responses.service.js.map