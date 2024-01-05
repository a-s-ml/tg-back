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
exports.WebhookTgService = void 0;
const common_1 = require("@nestjs/common");
const callbackQuery_service_1 = require("./callbackQuery.service");
let WebhookTgService = class WebhookTgService {
    constructor(callbackQueryService) {
        this.callbackQueryService = callbackQueryService;
    }
    update(updateDto) {
        if (updateDto.callback_query) {
            return this.callbackQueryService.update(updateDto.callback_query);
        }
        if (updateDto.poll_answer) {
            return this.callbackQueryService.pollAnswer(updateDto.poll_answer);
        }
        if (updateDto.message?.text) {
            return this.callbackQueryService.message(updateDto.message);
        }
        if (updateDto.my_chat_member) {
            return this.callbackQueryService.member(updateDto.my_chat_member);
        }
    }
};
exports.WebhookTgService = WebhookTgService;
exports.WebhookTgService = WebhookTgService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [callbackQuery_service_1.CallbackQueryService])
], WebhookTgService);
//# sourceMappingURL=webhook-tg.service.js.map