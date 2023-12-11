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
exports.ValidateController = void 0;
const common_1 = require("@nestjs/common");
const validate_dto_1 = require("./dto/validate.dto");
const validate_service_1 = require("./validate.service");
let ValidateController = class ValidateController {
    constructor(validateService) {
        this.validateService = validateService;
    }
    validate(initData) {
        return this.validateService.validateUser(initData);
    }
};
exports.ValidateController = ValidateController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validate_dto_1.ValidateDto]),
    __metadata("design:returntype", Object)
], ValidateController.prototype, "validate", null);
exports.ValidateController = ValidateController = __decorate([
    (0, common_1.Controller)("validate"),
    __metadata("design:paramtypes", [validate_service_1.ValidateService])
], ValidateController);
//# sourceMappingURL=validate.controller.js.map