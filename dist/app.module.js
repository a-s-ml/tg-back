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
const db_module_1 = require("./db/db.module");
const schedule_1 = require("@nestjs/schedule");
const auto_post_module_1 = require("./auto-post/auto-post.module");
const keyboard_service_1 = require("./constructors/keyboard/keyboard.service");
const user_module_1 = require("./request/user/user.module");
const category_module_1 = require("./request/category/category.module");
const responses_module_1 = require("./responses/responses.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            db_module_1.DbModule,
            auto_post_module_1.AutoPostModule,
            user_module_1.UserModule,
            category_module_1.CategoryModule,
            responses_module_1.ResponsesModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            keyboard_service_1.KeyboardService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map