"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTgService = void 0;
require("dotenv/config");
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
let GetTgService = class GetTgService {
    async tgGetChat(id) {
        try {
            const getchat = await axios_1.default.get(`${process.env.BASE_URL}getChat?chat_id=${id}`);
            console.log(getchat.data.result);
            return getchat.data.result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async tgGetChatAdministrators(id) {
        try {
            return await axios_1.default.get(`${process.env.BASE_URL}getChatAdministrators?chat_id=${id}`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async tgGetChatMember(chat_id, user_id) {
        try {
            return await axios_1.default.get(`${process.env.BASE_URL}getChatMember?chat_id=${chat_id}&user_id=${user_id}`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async tgGetChatMemberCount(id) {
        try {
            return await axios_1.default.get(`${process.env.BASE_URL}getChatMemberCount?chat_id=${id}`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async tgGetFilePhoto(unic_id) {
        console.log(unic_id);
        axios_1.default.get(`${process.env.BASE_URL}getFile?file_id=${unic_id}`)
            .then(async function (res1) {
            console.log(res1.data.result.file_path);
            return await (0, axios_1.default)({
                url: `${process.env.FILE_URL}/${res1.data.result.file_path}`,
                method: 'GET',
                responseType: 'blob',
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    async tgGetUserProfilePhotos(id) {
        try {
            return await axios_1.default.get(`${process.env.BASE_URL}getUserProfilePhotos?user_id=${id}&offset=0&limit=1`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async tgGetMe() {
        try {
            return await axios_1.default.get(`${process.env.BASE_URL}Getme`);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.GetTgService = GetTgService;
exports.GetTgService = GetTgService = __decorate([
    (0, common_1.Injectable)()
], GetTgService);
//# sourceMappingURL=getTgAPI.service.js.map