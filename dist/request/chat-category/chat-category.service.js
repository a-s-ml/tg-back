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
exports.ChatCategoryService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../../db/db.service");
let ChatCategoryService = class ChatCategoryService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(chatCategoryCreateInput) {
        return JSON.parse(JSON.stringify(await this.dbService.chatCategory.create({
            data: chatCategoryCreateInput
        }), (key, value) => typeof value === "bigint" ? value.toString() : value));
    }
    async findChat(chat) {
        return await this.dbService.chatCategory.findMany({
            select: {
                category: true
            },
            where: {
                chat
            }
        });
    }
    async findIdByChat(chat, category) {
        return await this.dbService.chatCategory.findFirst({
            select: {
                id: true,
            },
            where: {
                chat,
                category
            }
        });
    }
    async remove(deleteChatCategoryDto) {
        const row = await this.findIdByChat(deleteChatCategoryDto.chat, deleteChatCategoryDto.category);
        return JSON.parse(JSON.stringify(await this.dbService.chatCategory.delete({
            where: {
                id: row.id
            }
        }), (key, value) => typeof value === "bigint" ? value.toString() : value));
    }
};
exports.ChatCategoryService = ChatCategoryService;
exports.ChatCategoryService = ChatCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], ChatCategoryService);
//# sourceMappingURL=chat-category.service.js.map