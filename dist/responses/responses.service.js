"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsesService = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
let ResponsesService = class ResponsesService {
    async sendMessage(message) {
        try {
            return await axios_1.default.get(`${process.env.SEND_MESSAGE}chat_id=${message.chat_id}&text=${encodeURI(message.text)}&reply_markup=${JSON.stringify(message.reply_markup)}&disable_web_page_preview=${message.disable_web_page_preview}&parse_mode=${message.parse_mode}`);
        }
        catch (error) {
            return error;
        }
    }
    async answerCallbackQuery(answerCallbackQuery) {
        try {
            return await axios_1.default.get(`${process.env.SEND_ANSWER_CALLBACKQUERY}callback_query_id=${answerCallbackQuery.callback_query_id}&text=${encodeURI(answerCallbackQuery.text)}&parse_mode=HTML`);
        }
        catch (error) {
            return error;
        }
    }
};
exports.ResponsesService = ResponsesService;
exports.ResponsesService = ResponsesService = __decorate([
    (0, common_1.Injectable)()
], ResponsesService);
//# sourceMappingURL=responses.service.js.map