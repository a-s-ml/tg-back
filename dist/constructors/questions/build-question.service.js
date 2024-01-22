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
exports.BuildQuestionService = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("../../request/question/question.service");
const build_keyboard_service_1 = require("../keyboard/build-keyboard.service");
const category_service_1 = require("../../request/category/category.service");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_interface_1 = require("../../request/chat/models/events.interface");
let BuildQuestionService = class BuildQuestionService {
    constructor(questionService, buildKeyboardService, categoryService, eventEmitter) {
        this.questionService = questionService;
        this.buildKeyboardService = buildKeyboardService;
        this.categoryService = categoryService;
        this.eventEmitter = eventEmitter;
    }
    async questionBody(question) {
        const category = await this.categoryService.findOne(question.category);
        if (category.name) {
            const header = `<b>Вопрос:</b> №${question.id}\n<b>Категория</b>: ${category.name}\n<b>Сложность:</b> ${question.reward}\n\n`;
            const footer = '| <b><a href="">Статистика</a></b> | <b><a href="">Ошибка</a></b> |';
            let body;
            return (body = {
                header: encodeURI(header),
                text: encodeURI(question.text + "\n\n"),
                footer: encodeURI(footer)
            });
        }
        else {
            const event = new events_interface_1.EventInterface();
            event.name = "questionBody";
            event.description = `#no_category_name`;
            this.eventEmitter.emit('event', event);
        }
    }
    async questionText(id, chat) {
        const question = await this.questionService.findOne(id);
        const reply_markup = await this.buildKeyboardService.questionInlineKeboard(question.id);
        const body = await this.questionBody(question);
        const url = {
            chat_id: chat,
            text: body.header + body.text + body.footer,
            reply_markup: reply_markup,
            disable_web_page_preview: true,
            parse_mode: "HTML"
        };
        return url;
    }
    async questionPoll(id, chat, type) {
        let is_anonymous;
        is_anonymous = false;
        if (type === "channel") {
            is_anonymous = true;
        }
        const question = await this.questionService.findOne(id);
        const url = {
            chat_id: chat,
            question: encodeURI(question.text),
            options: [
                question.answer1,
                question.answer2,
                question.answer3,
                question.answer4
            ],
            correct_option_id: question.answerright,
            is_anonymous: is_anonymous
        };
        return url;
    }
    async questionImg(id, chat) {
        const question = await this.questionService.findOne(id);
        const reply_markup = await this.buildKeyboardService.questionInlineKeboard(question.id);
        const body = await this.questionBody(question);
        const url = {
            chat_id: chat,
            caption: body.header + body.footer,
            photo: question.img,
            reply_markup: reply_markup
        };
        return url;
    }
};
exports.BuildQuestionService = BuildQuestionService;
exports.BuildQuestionService = BuildQuestionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [question_service_1.QuestionService,
        build_keyboard_service_1.BuildKeyboardService,
        category_service_1.CategoryService,
        event_emitter_1.EventEmitter2])
], BuildQuestionService);
//# sourceMappingURL=build-question.service.js.map