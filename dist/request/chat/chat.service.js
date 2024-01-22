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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const db_service_1 = require("../../db/db.service");
const getTgAPI_service_1 = require("../../responses/getTgAPI.service");
const responses_service_1 = require("../../responses/responses.service");
const question_type_service_1 = require("../question-type/question-type.service");
const time_service_1 = require("../time/time.service");
const events_interface_1 = require("./models/events.interface");
let ChatService = class ChatService {
    constructor(dbService, questionTypeService, timeService, getTgService, responsesService, eventEmitter) {
        this.dbService = dbService;
        this.questionTypeService = questionTypeService;
        this.timeService = timeService;
        this.getTgService = getTgService;
        this.responsesService = responsesService;
        this.eventEmitter = eventEmitter;
    }
    async createChat(createChatDto) {
        return await this.dbService.chat.create({ data: createChatDto });
    }
    async createGroup(createChatDto) {
        return await this.dbService.chat.create({ data: createChatDto });
    }
    async findById(id) {
        return await this.dbService.chat.findUnique({
            where: {
                id
            }
        });
    }
    async clean() {
        const max = await this.dbService.chat.findMany();
        for (var key in max) {
            const res = await this.responsesService.sendChatAction(max[key].chat, "typing");
            if (res.ok === true) {
                console.log(max[key].chat + "true");
            }
            if (res.ok === false) {
                console.log(max[key].chat + "false");
                await this.removeByChat(max[key].chat);
            }
        }
    }
    async findByChatId(chat) {
        return JSON.parse(JSON.stringify(await this.dbService.chat.findUnique({
            where: {
                chat
            }
        }), (key, value) => typeof value === "bigint" ? value.toString() : value));
    }
    async findByReferal(chat) {
        return JSON.parse(JSON.stringify(await this.dbService.chat.findMany({
            where: {
                referral: chat
            }
        }), (key, value) => typeof value === "bigint" ? value.toString() : value));
    }
    async countByReferal(chat) {
        return await this.dbService.chat.count({
            where: {
                referral: chat
            }
        });
    }
    async update(chat, updateChatDto) {
        return JSON.parse(JSON.stringify(await this.dbService.chat.update({
            where: {
                chat
            },
            data: updateChatDto
        }), (key, value) => typeof value === "bigint" ? value.toString() : value));
    }
    async updateTimeChat(chat, time) {
        const req = await this.dbService.chat.update({
            where: {
                chat
            },
            data: time
        });
        return await this.timeService.findOne(req.time);
    }
    async updateTypeChat(chat, question_type) {
        const req = await this.dbService.chat.update({
            where: {
                chat
            },
            data: question_type,
        });
        return await this.questionTypeService.findOne(req.question_type);
    }
    async verificationExistence(from) {
        const checkUser = await this.findByChatId(from.id);
        if (!checkUser) {
            await this.createChat({
                chat: from.id,
                bot: from.is_bot ? 1 : 0
            });
            const event = new events_interface_1.EventInterface();
            event.name = "new user";
            event.description = String(from.id);
            this.eventEmitter.emit("event", event);
        }
    }
    async verificationExistenceChat(chat, from) {
        const checkChat = await this.findByChatId(chat.id);
        if (!checkChat) {
            await this.createGroup({
                chat: chat.id,
                type: chat.type,
                referral: from.id,
                bot: chat.type ? 1 : 0
            });
            const memberCount = await this.getTgService.tgGetChatMemberCount(chat.id);
            const event = new events_interface_1.EventInterface();
            event.name = "new group";
            event.description = String(chat.id);
            this.eventEmitter.emit("event", event);
        }
    }
    async groupInfoById(chat) {
        return await this.getTgService.tgGetChat(chat);
    }
    async groupMemberCountById(chat) {
        return await this.getTgService.tgGetChatMemberCount(chat);
    }
    async tgGetFilePhoto(unic_id) {
        return await this.getTgService.tgGetFilePhoto(unic_id);
    }
    async removeByChat(chat_id) {
        return await this.dbService.chat.delete({
            where: {
                chat: chat_id
            }
        });
    }
    async removeById(id) {
        return await this.dbService.chat.delete({
            where: {
                id
            }
        });
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        question_type_service_1.QuestionTypeService,
        time_service_1.TimeService,
        getTgAPI_service_1.GetTgService,
        responses_service_1.ResponsesService,
        event_emitter_1.EventEmitter2])
], ChatService);
//# sourceMappingURL=chat.service.js.map