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
exports.ChatActiveController = void 0;
const common_1 = require("@nestjs/common");
const chat_active_service_1 = require("./chat-active.service");
const client_1 = require("@prisma/client");
let ChatActiveController = class ChatActiveController {
    constructor(chatActiveService) {
        this.chatActiveService = chatActiveService;
    }
    create(createChatActiveDto) {
        return this.chatActiveService.create(createChatActiveDto);
    }
    findAll() {
        return this.chatActiveService.findAll();
    }
    findOne(chat) {
        return this.chatActiveService.findOne(chat);
    }
    remove(chat) {
        return this.chatActiveService.remove(chat);
    }
    clean() {
        return this.chatActiveService.clean();
    }
};
exports.ChatActiveController = ChatActiveController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatActiveController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatActiveController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":chat"),
    __param(0, (0, common_1.Param)("chat")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatActiveController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":chat"),
    __param(0, (0, common_1.Param)("chat")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatActiveController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)("/clean/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatActiveController.prototype, "clean", null);
exports.ChatActiveController = ChatActiveController = __decorate([
    (0, common_1.Controller)("chat-active"),
    __metadata("design:paramtypes", [chat_active_service_1.ChatActiveService])
], ChatActiveController);
//# sourceMappingURL=chat-active.controller.js.map