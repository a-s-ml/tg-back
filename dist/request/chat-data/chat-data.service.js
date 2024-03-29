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
    async create(chatDataCreateInput) {
        return await this.dbService.chatData.create({
            data: chatDataCreateInput
        });
    }
    async findLastByChat(group) {
        return await this.dbService.chatData.findMany({
            where: {
                group
            },
            orderBy: {
                id: "desc"
            },
            take: 1
        });
    }
    async findByPollId(poll_id) {
        return await this.dbService.chatData.findMany({
            where: {
                poll_id
            }
        });
    }
    async findAllByChat(group) {
        return await this.dbService.chatData.findMany({
            select: {
                question_id: true
            },
            where: {
                group
            }
        });
    }
    async countAllByChat(group) {
        return await this.dbService.chatData.count({
            where: {
                group
            }
        });
    }
    async findLastTwoByChat(group) {
        return await this.dbService.chatData.findMany({
            where: {
                group
            },
            orderBy: {
                id: "desc"
            },
            take: 2
        });
    }
    async findTypeLastTwoByChat(group) {
        let typeLastPost = [];
        const lastPost = await this.dbService.chatData.findMany({
            where: {
                group
            },
            orderBy: {
                id: "desc"
            },
            take: 2
        });
        console.log("chat-data.service - 69: ", lastPost);
        console.log("chat-data.service - 70: ", lastPost.length);
        typeLastPost.push(lastPost[0].question_type);
        if (lastPost.length > 1) {
            typeLastPost.push(lastPost[1].question_type);
        }
        else {
            typeLastPost.push(lastPost[0].question_type);
        }
        return typeLastPost;
    }
};
exports.ChatDataService = ChatDataService;
exports.ChatDataService = ChatDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], ChatDataService);
//# sourceMappingURL=chat-data.service.js.map