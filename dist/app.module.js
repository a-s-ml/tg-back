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
const user_module_1 = require("./request/user/user.module");
const category_module_1 = require("./request/category/category.module");
const webhook_tg_module_1 = require("./webhook-tg/webhook-tg.module");
const callbackAnswer_module_1 = require("./webhook-tg/callbackQuery/callbackAnswer.module");
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
            user_module_1.UserModule,
            category_module_1.CategoryModule,
            webhook_tg_module_1.WebhookTgModule,
            callbackAnswer_module_1.CallbackAnswerModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map