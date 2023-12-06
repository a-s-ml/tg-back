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
exports.ChatActService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../../db/db.service");
let ChatActService = class ChatActService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(createChatActDto) {
        return await this.dbService.chat_act.create({ data: createChatActDto });
    }
    async findAll() {
        return JSON.stringify(await this.dbService.chat_act.findMany({}), (key, value) => (typeof value === 'bigint' ? value.toString() : value));
    }
    async findOne(id) {
        return JSON.stringify(await this.dbService.chat_act.findUnique({
            where: {
                id: id
            }
        }), (key, value) => (typeof value === 'bigint' ? value.toString() : value));
    }
    async update(id, updateChatActDto) {
        return await this.dbService.chat_act.update({
            where: {
                id,
            },
            data: updateChatActDto
        });
    }
    async remove(id) {
        return await this.dbService.chat_act.delete({
            where: {
                id,
            }
        });
    }
};
exports.ChatActService = ChatActService;
exports.ChatActService = ChatActService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], ChatActService);
//# sourceMappingURL=chat_act.service.js.map