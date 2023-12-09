"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackQueryService = void 0;
const common_1 = require("@nestjs/common");
const callbackAnswer_service_1 = require("./callbackQuery/callbackAnswer.service");
let CallbackQueryService = class CallbackQueryService {
    constructor(callbackAnswers) {
        this.callbackAnswers = callbackAnswers;
    }
    update(callbackQuery) {
        const data = callbackQuery.data.split('_');
        switch (data[0]) {
            case 'answer':
                return this.callbackAnswers.answer(callbackQuery);
            default:
                break;
        }
    }
    message(message) {
        const text = `<b>Здравствуйте!</b> \n\nСейчас проходит оптимизация и глобальное обновление бота. \nПриносим свои извинения. \nПолный текущий функционал, а так же дополнительные функции станут доступны 15.12.2023. \n\nНа данный момент вы можете обратиться к @a_s_ml и вам сделают настройки удалённо по вашему желанию. \n\nБот всё ещё отправляет вопросы в активные группы и вы можете на них отвечать`;
        fetch(`${process.env.SEND_MESSAGE}chat_id=${message.from.id}&text=${text}&parse_mode=HTML`);
    }
};
exports.CallbackQueryService = CallbackQueryService;
exports.CallbackQueryService = CallbackQueryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [callbackAnswer_service_1.CallbackAnswerService])
], CallbackQueryService);
//# sourceMappingURL=callbackQuery.service.js.map