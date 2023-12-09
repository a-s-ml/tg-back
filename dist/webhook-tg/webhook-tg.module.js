"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookTgModule = void 0;
const common_1 = require("@nestjs/common");
const question_module_1 = require("../request/question/question.module");
const answer_module_1 = require("../request/answer/answer.module");
const chat_module_1 = require("../request/chat/chat.module");
const webhook_tg_controller_1 = require("./webhook-tg.controller");
const webhook_tg_service_1 = require("./webhook-tg.service");
const callbackQuery_service_1 = require("./callbackQuery.service");
const callbackAnswer_service_1 = require("./callbackQuery/callbackAnswer.service");
let WebhookTgModule = class WebhookTgModule {
};
exports.WebhookTgModule = WebhookTgModule;
exports.WebhookTgModule = WebhookTgModule = __decorate([
    (0, common_1.Module)({
        imports: [
            question_module_1.QuestionModule,
            answer_module_1.AnswerModule,
            chat_module_1.ChatModule
        ],
        controllers: [
            webhook_tg_controller_1.WebhookTgController
        ],
        providers: [
            webhook_tg_service_1.WebhookTgService,
            callbackQuery_service_1.CallbackQueryService,
            callbackAnswer_service_1.CallbackAnswerService
        ],
        exports: [
            webhook_tg_service_1.WebhookTgService,
            callbackAnswer_service_1.CallbackAnswerService
        ]
    })
], WebhookTgModule);
//# sourceMappingURL=webhook-tg.module.js.map