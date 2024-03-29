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
exports.ChatCategoryController = void 0;
const common_1 = require("@nestjs/common");
const chat_category_service_1 = require("./chat-category.service");
const client_1 = require("@prisma/client");
let ChatCategoryController = class ChatCategoryController {
    constructor(chatCategoryService) {
        this.chatCategoryService = chatCategoryService;
    }
    create(createChatCategoryDto) {
        return this.chatCategoryService.create(createChatCategoryDto);
    }
    findOne(chat) {
        return this.chatCategoryService.findChat(chat);
    }
    remove(deleteChatCategoryDto) {
        return this.chatCategoryService.remove(deleteChatCategoryDto);
    }
};
exports.ChatCategoryController = ChatCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(":chat"),
    __param(0, (0, common_1.Param)("chat")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatCategoryController.prototype, "remove", null);
exports.ChatCategoryController = ChatCategoryController = __decorate([
    (0, common_1.Controller)("chat-category"),
    __metadata("design:paramtypes", [chat_category_service_1.ChatCategoryService])
], ChatCategoryController);
//# sourceMappingURL=chat-category.controller.js.map