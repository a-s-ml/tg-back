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
exports.ChatActiveService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../../db/db.service");
const chat_service_1 = require("../chat/chat.service");
let ChatActiveService = class ChatActiveService {
    constructor(dbService, chatService) {
        this.dbService = dbService;
        this.chatService = chatService;
    }
    async create(chatActiveCreateInput) {
        return JSON.parse(JSON.stringify(await this.dbService.chatActive.create({
            data: chatActiveCreateInput
        }), (key, value) => typeof value === "bigint" ? value.toString() : value));
    }
    async findAll() {
        return await this.dbService.chatActive.findMany();
    }
    async findOne(chat) {
        const isActive = await this.dbService.chatActive.findUnique({
            where: {
                chat
            }
        });
        if (!isActive) {
            return false;
        }
        if (isActive) {
            return true;
        }
    }
    async countActiveByReferal(chat) {
        const all = await this.chatService.findByReferal(chat);
        return await this.dbService.chatActive.count({
            where: {
                chat: {
                    in: all.map((item) => item.id)
                }
            }
        });
    }
    async clean() {
        const all = await this.dbService.chatActive.findMany();
        for (var key in all) {
            const res = await this.chatService.findByChatId(all[key].chat);
            if (res) {
                console.log("true");
            }
            if (!res) {
                console.log("false");
            }
        }
    }
    async remove(chat) {
        return JSON.parse(JSON.stringify(await this.dbService.chatActive.delete({
            where: {
                chat
            }
        }), (key, value) => typeof value === "bigint" ? value.toString() : value));
    }
};
exports.ChatActiveService = ChatActiveService;
exports.ChatActiveService = ChatActiveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        chat_service_1.ChatService])
], ChatActiveService);
//# sourceMappingURL=chat-active.service.js.map