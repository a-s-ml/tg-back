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
const time_service_1 = require("../request/time/time.service");
const chat_module_1 = require("../request/chat/chat.module");
const chat_service_1 = require("../request/chat/chat.service");
const chat_data_module_1 = require("../request/chat-data/chat-data.module");
const chat_data_service_1 = require("../request/chat-data/chat-data.service");
const chat_category_module_1 = require("../request/chat-category/chat-category.module");
const chat_active_service_1 = require("../request/chat-active/chat-active.service");
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
            chat_module_1.ChatModule
        ],
        providers: [
            auto_post_service_1.AutoPostService,
            select_activ_chat_service_1.SelectActivChatService,
            select_questions_service_1.SelectQuestionService,
            chat_active_service_1.ChatActiveService,
            chat_data_service_1.ChatDataService,
            chat_service_1.ChatService,
            time_service_1.TimeService
        ],
        exports: [auto_post_service_1.AutoPostService, select_activ_chat_service_1.SelectActivChatService, select_questions_service_1.SelectQuestionService]
    })
], AutoPostModule);
//# sourceMappingURL=auto-post.module.js.map