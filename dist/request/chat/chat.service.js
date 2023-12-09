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
const db_service_1 = require("../../db/db.service");
const responses_service_1 = require("../../responses/responses.service");
let ChatService = class ChatService {
    constructor(dbService, responsesService) {
        this.dbService = dbService;
        this.responsesService = responsesService;
    }
    async create(createChatDto) {
        return this.dbService.chat.create({ data: createChatDto });
    }
    async findByChatId(chat) {
        return await this.dbService.chat.findUnique({
            where: {
                chat,
            }
        });
    }
    async update(chat, updateChatDto) {
        await this.dbService.chat.update({
            where: {
                chat,
            },
            data: updateChatDto
        });
    }
    remove(id) {
        return `This action removes a #${id} chat`;
    }
    async verificationExistence(from) {
        const checkUser = await this.findByChatId(from.id);
        if (!checkUser) {
            await this.create({ chat: from.id, bot: from.is_bot ? 1 : 0 });
            await this.responsesService.sendLogToAdmin(`new_user:\n${from.id}\n${from.first_name} ${from.username}`);
        }
    }
    async verificationExistenceChat(from) {
        const checkChat = await this.findByChatId(from.id);
        if (!checkChat) {
            await this.create({ chat: from.id, bot: from.type ? 1 : 0 });
            await this.responsesService.sendLogToAdmin(`new_chat:\n${from.id}\n${from.type}`);
        }
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        responses_service_1.ResponsesService])
], ChatService);
//# sourceMappingURL=chat.service.js.map