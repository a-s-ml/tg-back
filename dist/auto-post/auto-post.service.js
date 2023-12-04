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
exports.AutoPostService = void 0;
const common_1 = require("@nestjs/common");
const selectQuestions_service_1 = require("./selectQuestions.service");
const selectActivChat_cervice_1 = require("./selectActivChat.cervice");
let AutoPostService = class AutoPostService {
    constructor(selectQuestion, selectActivChat) {
        this.selectQuestion = selectQuestion;
        this.selectActivChat = selectActivChat;
    }
    async publicationInActiveGroup() {
        const chatact = await this.selectActivChat.activChat();
        for (var key in chatact) {
            const t0 = performance.now();
            const a = await this.selectQuestion.availableQuestion(chatact[key].chat);
            fetch(`https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=521884639&text=${chatact[key].chat}-${a[0].id}`);
            const t1 = performance.now();
            console.log(t1 - t0, 'milliseconds');
        }
    }
};
exports.AutoPostService = AutoPostService;
exports.AutoPostService = AutoPostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [selectQuestions_service_1.SelectQuestion,
        selectActivChat_cervice_1.SelectActivChat])
], AutoPostService);
//# sourceMappingURL=auto-post.service.js.map