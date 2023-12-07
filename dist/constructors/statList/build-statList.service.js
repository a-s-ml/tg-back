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
exports.BuildStatListService = void 0;
const common_1 = require("@nestjs/common");
const build_keyboard_service_1 = require("../keyboard/build-keyboard.service");
const answer_service_1 = require("../../request/answer/answer.service");
const getTG_service_1 = require("../../responses/getTG.service");
let BuildStatListService = class BuildStatListService {
    constructor(buildKeyboardService, answerService, getTgService) {
        this.buildKeyboardService = buildKeyboardService;
        this.answerService = answerService;
        this.getTgService = getTgService;
    }
    async statStandart(id) {
        const answers = await this.answerService.getStatChat(id);
        let text = 'Рейтинг участников викторины за текущий месяц:\n\n';
        let id_userstat = 1;
        answers.length > 0 && answers?.map(async (item) => {
            text = text + `${id_userstat}. ${item.chat_id} \u2013 ${item._sum.reward.toFixed(2)}очк. (${item._count.id} отв.)\n`;
            id_userstat++;
        });
        const reply_markup = await this.buildKeyboardService.statInlineKeboard();
        const url = {
            chat_id: 521884639,
            text: encodeURI(text),
            reply_markup,
            disable_web_page_preview: true,
            parse_mode: 'HTML'
        };
        return url;
    }
};
exports.BuildStatListService = BuildStatListService;
exports.BuildStatListService = BuildStatListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [build_keyboard_service_1.BuildKeyboardService,
        answer_service_1.AnswerService,
        getTG_service_1.GetTgService])
], BuildStatListService);
//# sourceMappingURL=build-statList.service.js.map