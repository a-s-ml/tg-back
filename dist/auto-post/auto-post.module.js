"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoPostModule = void 0;
const common_1 = require("@nestjs/common");
const auto_post_service_1 = require("./auto-post.service");
const select_questions_service_1 = require("./select-questions.service");
const select_activ_chat_service_1 = require("./select-activ-chat.service");
const question_module_1 = require("../request/question/question.module");
const constructors_module_1 = require("../constructors/constructors.module");
const chat_module_1 = require("../request/chat/chat.module");
const chat_data_module_1 = require("../request/chat-data/chat-data.module");
const chat_category_module_1 = require("../request/chat-category/chat-category.module");
const responses_module_1 = require("../responses/responses.module");
const auto_post_controller_1 = require("./auto-post.controller");
const chat_active_module_1 = require("../request/chat-active/chat-active.module");
let AutoPostModule = class AutoPostModule {
};
exports.AutoPostModule = AutoPostModule;
exports.AutoPostModule = AutoPostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            question_module_1.QuestionModule,
            chat_data_module_1.ChatDataModule,
            chat_category_module_1.ChatCategoryModule,
            constructors_module_1.ConstructorsModule,
            chat_active_module_1.ChatActiveModule,
            chat_module_1.ChatModule,
            responses_module_1.ResponsesModule
        ],
        providers: [auto_post_service_1.AutoPostService, select_activ_chat_service_1.SelectActivChatService, select_questions_service_1.SelectQuestionService],
        exports: [auto_post_service_1.AutoPostService, select_activ_chat_service_1.SelectActivChatService, select_questions_service_1.SelectQuestionService],
        controllers: [auto_post_controller_1.AutoPostController]
    })
], AutoPostModule);
//# sourceMappingURL=auto-post.module.js.map