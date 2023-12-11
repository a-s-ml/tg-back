"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsesService = void 0;
require("dotenv/config");
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
let ResponsesService = class ResponsesService {
    async sendMessage(message) {
        try {
            const url = `
			${process.env.SEND_MESSAGE}
			chat_id=${message.chat_id}
			&text=${message.text}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`;
            const response = await axios_1.default.get(url);
            return response.data.result;
        }
        catch (error) {
            return this.sendLogToAdmin('j ' + error.toJSON());
        }
    }
    async editMessageText(message) {
        try {
            const url = `
			${process.env.SEND_MESSAGE}
			message_id=${message.message_id}
			&text=${message.text}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`;
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            return this.sendLogToAdmin('j ' + error.toJSON());
        }
    }
    async sendPoll(message) {
        try {
            const url = `
			${process.env.SEND_POLL}
			chat_id=${message.chat_id}
			&question=${message.question}
			&options=${JSON.stringify(message.options)}
			&correct_option_id=${message.correct_option_id}
			&type=quiz
			&is_anonymous=${message.is_anonymous}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`;
            const response = await axios_1.default.get(url);
            return response.data.result;
        }
        catch (error) {
            return this.sendLogToAdmin('j ' + error.toJSON());
        }
    }
    async editMessageCaption(message) {
        try {
            const url = `
			${process.env.SEND_POLL}
			message_id=${message.message_id}
			&caption=${message.caption}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`;
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            return this.sendLogToAdmin('j ' + error.toJSON());
        }
    }
    async sendPhoto(message) {
        try {
            const url = `
			${process.env.SEND_PHOTO}
			chat_id=${message.chat_id}
			&caption=${message.caption}
			&photo=${message.photo}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`;
            const response = await axios_1.default.get(url);
            return response.data.result;
        }
        catch (error) {
            return this.errorResponse(error);
        }
    }
    async editMessageReplyMarkup(message) {
        try {
            const url = `
			${process.env.SEND_PHOTO}
			message_id=${message.message_id}
			&reply_markup=${JSON.stringify(message.reply_markup)}
			&disable_web_page_preview=true
			&parse_mode=HTML
			`;
            const response = await axios_1.default.get(url);
            return response.data.result;
        }
        catch (error) {
            return this.errorResponse(error);
        }
    }
    async answerCallbackQuery(answerCallbackQuery) {
        try {
            const url = `
			${process.env.SEND_ANSWER_CALLBACKQUERY}
			callback_query_id=${answerCallbackQuery.callback_query_id}
			&text=${answerCallbackQuery.text}
			&show_alert=true
			`;
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            return this.errorResponse(error);
        }
    }
    async sendLogToAdmin(data) {
        try {
            const adminChannel = -1001524297397n;
            const text = encodeURI(data);
            const response = await axios_1.default.get(`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`);
            return response.data.result;
        }
        catch (error) {
            return this.errorResponse(error);
        }
    }
    async errorResponse(error) {
        if (error.response) {
            this.sendLogToAdmin('data' + error.response.data);
            this.sendLogToAdmin('status' + error.response.status);
            this.sendLogToAdmin('headers' + error.response.headers);
        }
        else if (error.request) {
            this.sendLogToAdmin('request: ' + error.request);
        }
        else {
            this.sendLogToAdmin('message: ' + error.message);
        }
        this.sendLogToAdmin('config ' + error.config);
    }
};
exports.ResponsesService = ResponsesService;
exports.ResponsesService = ResponsesService = __decorate([
    (0, common_1.Injectable)()
], ResponsesService);
//# sourceMappingURL=responses.service.js.map