"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatActiveModule = void 0;
const common_1 = require("@nestjs/common");
const chat_active_service_1 = require("./chat-active.service");
const chat_active_controller_1 = require("./chat-active.controller");
const chat_service_1 = require("../chat/chat.service");
let ChatActiveModule = class ChatActiveModule {
};
exports.ChatActiveModule = ChatActiveModule;
exports.ChatActiveModule = ChatActiveModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [chat_active_controller_1.ChatActiveController],
        providers: [chat_active_service_1.ChatActiveService, chat_service_1.ChatService],
        exports: [chat_active_service_1.ChatActiveService]
    })
], ChatActiveModule);
//# sourceMappingURL=chat-active.module.js.map