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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const webhook_tg_module_1 = require("./webhook-tg/webhook-tg.module");
const db_module_1 = require("./db/db.module");
const answer_module_1 = require("./request/answer/answer.module");
const chat_data_module_1 = require("./request/chat_data/chat_data.module");
const question_module_1 = require("./request/question/question.module");
const user_module_1 = require("./request/user/user.module");
const menu_main_module_1 = require("./request/menu-main/menu-main.module");
const validate_module_1 = require("./validate/validate.module");
const schedule_1 = require("@nestjs/schedule");
const chat_act_module_1 = require("./request/chat_act/chat_act.module");
const category_module_1 = require("./request/category/category.module");
const chat_cat_module_1 = require("./request/chat_cat/chat_cat.module");
const time_module_1 = require("./request/time/time.module");
const auto_post_service_1 = require("./auto-post/auto-post.service");
const auto_post_module_1 = require("./auto-post/auto-post.module");
const select_questions_service_1 = require("./auto-post/select-questions.service");
const select_activ_chat_cervice_1 = require("./auto-post/select-activ-chat.cervice");
const build_question_module_1 = require("./constructors/questions/build-question.module");
const inline_keyboard_service_1 = require("./constructors/keyboard/inline-keyboard.service");
const keyboard_service_1 = require("./constructors/keyboard/keyboard.service");
const build_question_service_1 = require("./constructors/questions/build-question.service");
const question_service_1 = require("./request/question/question.service");
const chat_cat_service_1 = require("./request/chat_cat/chat_cat.service");
const chat_data_service_1 = require("./request/chat_data/chat_data.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            webhook_tg_module_1.WebhookTgModule,
            user_module_1.UserModule,
            db_module_1.DbModule,
            answer_module_1.AnswerModule,
            chat_data_module_1.ChatDataModule,
            question_module_1.QuestionModule,
            menu_main_module_1.MenuMainModule,
            validate_module_1.ValidateModule,
            chat_act_module_1.ChatActModule,
            category_module_1.CategoryModule,
            chat_cat_module_1.ChatCatModule,
            time_module_1.TimeModule,
            auto_post_module_1.AutoPostModule,
            build_question_module_1.BuildQuestionModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            auto_post_service_1.AutoPostService,
            select_activ_chat_cervice_1.SelectActivChat,
            select_questions_service_1.SelectQuestion,
            keyboard_service_1.KeyboardService,
            question_service_1.QuestionService,
            build_question_service_1.BuildQuestionService,
            inline_keyboard_service_1.InlineKeyboardService, chat_cat_service_1.ChatCatService, chat_data_service_1.ChatDataService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map