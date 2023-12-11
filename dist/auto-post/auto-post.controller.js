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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoPostController = void 0;
const common_1 = require("@nestjs/common");
const auto_post_service_1 = require("./auto-post.service");
let AutoPostController = class AutoPostController {
    constructor(autoPostService) {
        this.autoPostService = autoPostService;
    }
    questionTypePoll(question, id, type) {
        return this.autoPostService.questionTypePoll(+question, {
            chat: id,
            type: type
        });
    }
};
exports.AutoPostController = AutoPostController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)("question")),
    __param(1, (0, common_1.Param)("chatid")),
    __param(2, (0, common_1.Param)("chattype")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AutoPostController.prototype, "questionTypePoll", null);
exports.AutoPostController = AutoPostController = __decorate([
    (0, common_1.Controller)("auto-post"),
    __metadata("design:paramtypes", [auto_post_service_1.AutoPostService])
], AutoPostController);
//# sourceMappingURL=auto-post.controller.js.map