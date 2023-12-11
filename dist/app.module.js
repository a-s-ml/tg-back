"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const db_module_1 = require("./db/db.module");
const responses_module_1 = require("./responses/responses.module");
const schedule_1 = require("@nestjs/schedule");
const auto_post_module_1 = require("./auto-post/auto-post.module");
const category_module_1 = require("./request/category/category.module");
const webhook_tg_module_1 = require("./webhook-tg/webhook-tg.module");
const callbackAnswer_module_1 = require("./webhook-tg/callbackQuery/callbackAnswer.module");
const chat_module_1 = require("./request/chat/chat.module");
const chat_data_module_1 = require("./request/chat-data/chat-data.module");
const chat_active_module_1 = require("./request/chat-active/chat-active.module");
const chat_category_module_1 = require("./request/chat-category/chat-category.module");
const time_module_1 = require("./request/time/time.module");
const chat_type_module_1 = require("./request/chat-type/chat-type.module");
const question_type_module_1 = require("./request/question-type/question-type.module");
const validate_module_1 = require("./validate/validate.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            db_module_1.DbModule,
            responses_module_1.ResponsesModule,
            auto_post_module_1.AutoPostModule,
            category_module_1.CategoryModule,
            webhook_tg_module_1.WebhookTgModule,
            callbackAnswer_module_1.CallbackAnswerModule,
            chat_module_1.ChatModule,
            chat_data_module_1.ChatDataModule,
            chat_active_module_1.ChatActiveModule,
            chat_category_module_1.ChatCategoryModule,
            time_module_1.TimeModule,
            chat_type_module_1.ChatTypeModule,
            question_type_module_1.QuestionTypeModule,
            validate_module_1.ValidateModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map