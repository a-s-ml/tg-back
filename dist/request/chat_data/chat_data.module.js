"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatDataModule = void 0;
const common_1 = require("@nestjs/common");
const chat_data_service_1 = require("./chat_data.service");
const chat_data_controller_1 = require("./chat_data.controller");
let ChatDataModule = class ChatDataModule {
};
exports.ChatDataModule = ChatDataModule;
exports.ChatDataModule = ChatDataModule = __decorate([
    (0, common_1.Module)({
        controllers: [chat_data_controller_1.ChatDataController],
        providers: [chat_data_service_1.ChatDataService],
        exports: [chat_data_service_1.ChatDataService]
    })
], ChatDataModule);
//# sourceMappingURL=chat_data.module.js.map