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
exports.ChatCatService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../../db/db.service");
let ChatCatService = class ChatCatService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(createChatCatDto) {
        return await this.dbService.chat_cat.create({ data: createChatCatDto });
    }
    async findAll() {
        await this.dbService.chat_cat.findMany({});
    }
    async findOne(id) {
        return await this.dbService.chat_cat.findUnique({
            where: {
                id: id
            }
        });
    }
    async update(id, updateChatCatDto) {
        return await this.dbService.chat_cat.update({
            where: {
                id,
            },
            data: updateChatCatDto
        });
    }
    async remove(id) {
        return await this.dbService.chat_cat.delete({
            where: {
                id,
            }
        });
    }
};
exports.ChatCatService = ChatCatService;
exports.ChatCatService = ChatCatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], ChatCatService);
//# sourceMappingURL=chat_cat.service.js.map