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
exports.ChatDataService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../../db/db.service");
let ChatDataService = class ChatDataService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(createChatDatumDto) {
        return await this.dbService.chat_data.create({ data: createChatDatumDto });
    }
    async findAll() {
        return JSON.stringify(await this.dbService.chat_data.findMany({}), (key, value) => (typeof value === 'bigint' ? value.toString() : value));
    }
    async findOne(id) {
        return JSON.stringify(await this.dbService.chat_data.findUnique({
            where: {
                id: id
            }
        }), (key, value) => (typeof value === 'bigint' ? value.toString() : value));
    }
    async update(id, updateChatDatumDto) {
        return await this.dbService.chat_data.update({
            where: {
                id,
            },
            data: updateChatDatumDto
        });
    }
    async remove(id) {
        return await this.dbService.chat_data.delete({
            where: {
                id,
            }
        });
    }
};
exports.ChatDataService = ChatDataService;
exports.ChatDataService = ChatDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], ChatDataService);
//# sourceMappingURL=chat_data.service.js.map