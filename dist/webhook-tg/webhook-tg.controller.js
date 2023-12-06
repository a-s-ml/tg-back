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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookTgController = void 0;
const common_1 = require("@nestjs/common");
const webhook_tg_service_1 = require("./webhook-tg.service");
const update_dto_1 = require("./dto/update.dto");
let WebhookTgController = class WebhookTgController {
    constructor(webhookTg) {
        this.webhookTg = webhookTg;
    }
    update(updateDto) {
        console.log(updateDto + 'updateDto');
        return this.webhookTg.update(updateDto);
    }
};
exports.WebhookTgController = WebhookTgController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.UpdateDto]),
    __metadata("design:returntype", void 0)
], WebhookTgController.prototype, "update", null);
exports.WebhookTgController = WebhookTgController = __decorate([
    (0, common_1.Controller)('webhook-tg'),
    __metadata("design:paramtypes", [webhook_tg_service_1.WebhookTgService])
], WebhookTgController);
//# sourceMappingURL=webhook-tg.controller.js.map