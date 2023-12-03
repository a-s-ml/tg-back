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
const answer_module_1 = require("./answer/answer.module");
const chat_data_module_1 = require("./chat_data/chat_data.module");
const question_module_1 = require("./question/question.module");
const user_module_1 = require("./user/user.module");
const menu_main_module_1 = require("./menu-main/menu-main.module");
const validate_module_1 = require("./validate/validate.module");
const schedule_1 = require("@nestjs/schedule");
const chat_act_module_1 = require("./chat_act/chat_act.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [webhook_tg_module_1.WebhookTgModule, user_module_1.UserModule, db_module_1.DbModule, answer_module_1.AnswerModule, chat_data_module_1.ChatDataModule, question_module_1.QuestionModule, menu_main_module_1.MenuMainModule, validate_module_1.ValidateModule, schedule_1.ScheduleModule.forRoot(), chat_act_module_1.ChatActModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map