"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const chat_category_service_1 = require("./chat-category.service");
const chat_category_controller_1 = require("./chat-category.controller");
const chat_service_1 = require("../chat/chat.service");
let ChatCategoryModule = class ChatCategoryModule {
};
exports.ChatCategoryModule = ChatCategoryModule;
exports.ChatCategoryModule = ChatCategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [chat_category_controller_1.ChatCategoryController],
        providers: [chat_category_service_1.ChatCategoryService, chat_service_1.ChatService],
        exports: [chat_category_service_1.ChatCategoryService]
    })
], ChatCategoryModule);
//# sourceMappingURL=chat-category.module.js.map