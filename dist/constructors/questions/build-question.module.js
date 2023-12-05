"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildQuestionModule = void 0;
const common_1 = require("@nestjs/common");
const build_question_service_1 = require("./build-question.service");
const question_service_1 = require("../../request/question/question.service");
const inline_keyboard_service_1 = require("../keyboard/inline-keyboard.service");
let BuildQuestionModule = class BuildQuestionModule {
};
exports.BuildQuestionModule = BuildQuestionModule;
exports.BuildQuestionModule = BuildQuestionModule = __decorate([
    (0, common_1.Module)({
        providers: [
            build_question_service_1.BuildQuestionService,
            inline_keyboard_service_1.InlineKeyboardService,
            question_service_1.QuestionService
        ]
    })
], BuildQuestionModule);
//# sourceMappingURL=build-question.module.js.map