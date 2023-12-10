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
exports.ChatDataController = void 0;
const common_1 = require("@nestjs/common");
const chat_data_service_1 = require("./chat-data.service");
const client_1 = require("@prisma/client");
let ChatDataController = class ChatDataController {
    constructor(chatDataService) {
        this.chatDataService = chatDataService;
    }
    create(createChatDatumDto) {
        return this.chatDataService.create(createChatDatumDto);
    }
    findLastChat(group) {
        return this.chatDataService.findLastChat(group);
    }
    findAllChat(group) {
        return this.chatDataService.findAllChat(group);
    }
};
exports.ChatDataController = ChatDataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(":group"),
    __param(0, (0, common_1.Param)("group")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatDataController.prototype, "findLastChat", null);
__decorate([
    (0, common_1.Get)(":group"),
    __param(0, (0, common_1.Param)("group")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatDataController.prototype, "findAllChat", null);
exports.ChatDataController = ChatDataController = __decorate([
    (0, common_1.Controller)("chat-data"),
    __metadata("design:paramtypes", [chat_data_service_1.ChatDataService])
], ChatDataController);
//# sourceMappingURL=chat-data.controller.js.map