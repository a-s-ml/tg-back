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
exports.CallbackAnswerService = void 0;
const common_1 = require("@nestjs/common");
const answer_service_1 = require("../../request/answer/answer.service");
const question_service_1 = require("../../request/question/question.service");
const responses_service_1 = require("../../responses/responses.service");
const chat_service_1 = require("../../request/chat/chat.service");
const chat_data_service_1 = require("../../request/chat-data/chat-data.service");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_interface_1 = require("../../request/chat/models/events.interface");
let CallbackAnswerService = class CallbackAnswerService {
    constructor(answerService, questionService, responsesService, eventEmitter, chatService, chatDataService) {
        this.answerService = answerService;
        this.questionService = questionService;
        this.responsesService = responsesService;
        this.eventEmitter = eventEmitter;
        this.chatService = chatService;
        this.chatDataService = chatDataService;
    }
    async answerCheck(chat, group, answer, question_id) {
        const checkAnswer = await this.answerService.findByChat(chat.id, question_id, group);
        let text;
        let reward;
        if (checkAnswer.length == 0) {
            const question = await this.questionService.findOne(question_id);
            if (answer == question.answerright) {
                reward = question.reward;
                text = `Верно! \n\nДобавлено ${question.reward} очков`;
            }
            else {
                reward = -question.reward;
                text = `Не верно! \n\nВычтено ${question.reward} очков`;
            }
            await this.answerService.create({
                chat: chat.id,
                question: question_id,
                group: group,
                choice: answer,
                reward: reward
            });
        }
        else {
            text = `Вы уже двали ответ на этот вопрос!`;
        }
        return text;
    }
    async answer(callbackQuery) {
        const data = callbackQuery.data.split("_");
        const text = await this.answerCheck(callbackQuery.from, callbackQuery.message.chat.id, +data[2], +data[1]);
        const res = {
            callback_query_id: callbackQuery.id,
            text: encodeURI(text)
        };
        await this.responsesService.answerCallbackQuery(res);
        const event = new events_interface_1.EventInterface();
        event.name = "newAnswer";
        event.description = `chat: #id${callbackQuery.from.id}\nusername: @${callbackQuery.from.username}\ngroup: #id${-callbackQuery.message.chat.id}\nquestion_id: #qid${data[1]}`;
        this.eventEmitter.emit("eventAnswer", event);
    }
    async pollAnswer(pollAnswer) {
        if (pollAnswer.user) {
            const question = await this.chatDataService.findByPollId(pollAnswer.poll_id);
            if (question) {
                await this.answerCheck(pollAnswer.user, question[0].group, pollAnswer.option_ids[0] + 1, question[0].question_id);
                const event = new events_interface_1.EventInterface();
                event.name = "newAnswerPoll";
                event.description = `chat: #id${pollAnswer.user.id}\nusername: @${pollAnswer.user.username}\ngroup: #id${-question[0].group}\nquestion_id: #qid${question[0].question_id}`;
                this.eventEmitter.emit("eventAnswer", event);
            }
        }
    }
};
exports.CallbackAnswerService = CallbackAnswerService;
exports.CallbackAnswerService = CallbackAnswerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [answer_service_1.AnswerService,
        question_service_1.QuestionService,
        responses_service_1.ResponsesService,
        event_emitter_1.EventEmitter2,
        chat_service_1.ChatService,
        chat_data_service_1.ChatDataService])
], CallbackAnswerService);
//# sourceMappingURL=callbackAnswer.service.js.map