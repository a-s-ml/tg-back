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
let LogAdminService = class LogAdminService {
    async sendLogToAdminGroupErrorResponse(text) {
        const adm = -1001524297397n;
        try {
            await axios_1.default.get(`
				${process.env.SEND_MESSAGE}
				chat_id=${adm}
				&text=${encodeURI(text)}
				&disable_web_page_preview=true
				&parse_mode=HTML 
				`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async sendLogToAdminGroupErrorResponse2(text) {
        const adm = -1001524297397n;
        try {
            await axios_1.default.get(`
				${process.env.SEND_MESSAGE}
				chat_id=${adm}
				&text=${encodeURI(text)}
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
    (0, event_emitter_1.OnEvent)("**", { async: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LogAdminService.prototype, "sendLogToAdminGroupErrorResponse", null);
__decorate([
    (0, event_emitter_1.OnEvent)("errorResponse.*", { async: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LogAdminService.prototype, "sendLogToAdminGroupErrorResponse2", null);
exports.LogAdminService = LogAdminService = __decorate([
    (0, common_1.Injectable)()
], LogAdminService);
//# sourceMappingURL=logAdmin.service.js.map