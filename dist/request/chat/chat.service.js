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
let ChatService = class ChatService {
    constructor(dbService, getTgService, eventEmitter) {
        this.dbService = dbService;
        this.getTgService = getTgService;
        this.eventEmitter = eventEmitter;
    }
    async createChat(createChatDto) {
        return await this.dbService.chat.create({ data: createChatDto });
    }
    async createGroup(createChatDto) {
        return await this.dbService.chat.create({ data: createChatDto });
    }
    async findByChatId(chat) {
        return await this.dbService.chat.findUnique({
            where: {
                chat
            }
        });
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
        await this.dbService.chat.update({
            where: {
                chat
            },
            data: updateChatDto
        });
    }
    async verificationExistence(from) {
        const checkUser = await this.findByChatId(from.id);
        if (!checkUser) {
            await this.createChat({
                chat: from.id,
                bot: from.is_bot ? 1 : 0
            });
            await this.eventEmitter.emitAsync("newChatMember.chatMember", `new_user: ${from.id}\nfirst_name: ${from.first_name}\nlast_name: ${from.last_name}\nusername @${from.username}`);
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
            await this.eventEmitter.emitAsync("newChatMember.chatMember", `new_chat: ${chat.id}\ntitle: ${chat.title}\nusername: ${chat.username}\nbio: ${chat.bio}\ndescription: ${chat.description}\ntype: ${chat.type}\nwho: ${from.id}\nmember_count: ${JSON.stringify(memberCount)}`);
        }
    }
    async groupInfoById(chat) {
        const getChat = await this.getTgService.tgGetChat(chat);
        const getChatMemberCount = await this.getTgService.tgGetChatMemberCount(chat);
        return { getChat, getChatMemberCount };
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        getTgAPI_service_1.GetTgService,
        event_emitter_1.EventEmitter2])
], ChatService);
//# sourceMappingURL=chat.service.js.map