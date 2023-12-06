"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackAnswerModule = void 0;
const common_1 = require("@nestjs/common");
const callbackAnswer_service_1 = require("./callbackAnswer.service");
const webhook_tg_module_1 = require("../webhook-tg.module");
const question_service_1 = require("../../request/question/question.service");
const answer_service_1 = require("../../request/answer/answer.service");
const responses_service_1 = require("../../responses/responses.service");
const user_module_1 = require("../../request/user/user.module");
const user_service_1 = require("../../request/user/user.service");
let CallbackAnswerModule = class CallbackAnswerModule {
};
exports.CallbackAnswerModule = CallbackAnswerModule;
exports.CallbackAnswerModule = CallbackAnswerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            webhook_tg_module_1.WebhookTgModule,
            user_module_1.UserModule
        ],
        providers: [
            callbackAnswer_service_1.CallbackAnswerService,
            question_service_1.QuestionService,
            answer_service_1.AnswerService,
            responses_service_1.ResponsesService,
            user_service_1.UserService
        ]
    })
], CallbackAnswerModule);
//# sourceMappingURL=callbackAnswer.module.js.map