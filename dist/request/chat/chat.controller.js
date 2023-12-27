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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const client_1 = require("@prisma/client");
const validate_service_1 = require("./validate.service");
const validate_dto_1 = require("./dto/validate.dto");
let ChatController = class ChatController {
    constructor(chatService, validateService) {
        this.chatService = chatService;
        this.validateService = validateService;
    }
    validate(initData) {
        return this.validateService.validateUser(initData);
    }
    initData(initData) {
        return this.validateService.validateUserGet(initData);
    }
    update(chat, updateChatDto) {
        return this.chatService.update(chat, updateChatDto);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)("validateUser"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validate_dto_1.ValidateDto]),
    __metadata("design:returntype", Object)
], ChatController.prototype, "validate", null);
__decorate([
    (0, common_1.Get)(":initData"),
    __param(0, (0, common_1.Param)("initData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "initData", null);
__decorate([
    (0, common_1.Patch)(":chat"),
    __param(0, (0, common_1.Param)("chat")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "update", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)("chat"),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        validate_service_1.ValidateService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map