"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const chat_controller_1 = require("./chat.controller");
const responses_module_1 = require("../../responses/responses.module");
const validate_service_1 = require("./validate.service");
const answer_module_1 = require("../answer/answer.module");
const question_module_1 = require("../question/question.module");
const chat_active_module_1 = require("../chat-active/chat-active.module");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [responses_module_1.ResponsesModule, answer_module_1.AnswerModule, question_module_1.QuestionModule, chat_active_module_1.ChatActiveModule],
        controllers: [chat_controller_1.ChatController],
        providers: [chat_service_1.ChatService, validate_service_1.ValidateService],
        exports: [chat_service_1.ChatService]
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map