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
const responses_service_1 = require("../../responses/responses.service");
let ChatCategoryService = class ChatCategoryService {
    constructor(dbService, responsesService) {
        this.dbService = dbService;
        this.responsesService = responsesService;
    }
    async create(chatCategoryCreateInput) {
        return await this.dbService.chatCategory.create({
            data: chatCategoryCreateInput
        });
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
    async remove(id) {
        return await this.dbService.chatCategory.delete({
            where: {
                id
            }
        });
    }
    async clean() {
        const max = await this.dbService.chatCategory.findMany();
        for (var key in max) {
            const res = await this.responsesService.sendChatAction(max[key].chat, "typing");
            if (res.ok === true) {
                console.log(max[key].chat + "true");
            }
            if (res.ok === false) {
                console.log(max[key].chat + "false");
            }
        }
    }
};
exports.ChatCategoryService = ChatCategoryService;
exports.ChatCategoryService = ChatCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        responses_service_1.ResponsesService])
], ChatCategoryService);
//# sourceMappingURL=chat-category.service.js.map