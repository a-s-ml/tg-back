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
exports.LogAdminService = void 0;
require("dotenv/config");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const axios_1 = require("axios");
const MessageTgEvent_interface_1 = require("./interfaces/MessageTgEvent.interface");
let LogAdminService = class LogAdminService {
    constructor(adminChannel) {
        this.adminChannel = -1001524297397n;
        this.adminChannel = adminChannel;
    }
    async sendLogToAdminText(text) {
        console.log('onEvent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        try {
            const adminChannel = -1001524297397n;
            await axios_1.default.get(`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async sendLogToAdminText2(text) {
        console.log('onEvent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        try {
            const adminChannel = -1001524297397n;
            await axios_1.default.get(`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async sendLogToAdmin(data) {
        console.log('onEvent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        try {
            const adminChannel = -1001524297397n;
            const text = encodeURI(`
                successResponse: ${data.type}\n
                group: ${data.response.chat.id}\n
                group type: ${data.response.chat.type}\n
                link: https://t.me/${data.response.chat.username}/${data.response.message_id}
                `);
            await axios_1.default.get(`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.LogAdminService = LogAdminService;
__decorate([
    (0, event_emitter_1.OnEvent)("newChatMember.*", { async: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LogAdminService.prototype, "sendLogToAdminText", null);
__decorate([
    (0, event_emitter_1.OnEvent)("newChatMember.chatMember", { async: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LogAdminService.prototype, "sendLogToAdminText2", null);
__decorate([
    (0, event_emitter_1.OnEvent)("successResponse.*", { async: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MessageTgEvent_interface_1.MessageTgEvent]),
    __metadata("design:returntype", Promise)
], LogAdminService.prototype, "sendLogToAdmin", null);
exports.LogAdminService = LogAdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [BigInt])
], LogAdminService);
//# sourceMappingURL=logAdmin.service.js.map