"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChatDatumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chat_datum_dto_1 = require("./create-chat_datum.dto");
class UpdateChatDatumDto extends (0, mapped_types_1.PartialType)(create_chat_datum_dto_1.CreateChatDatumDto) {
}
exports.UpdateChatDatumDto = UpdateChatDatumDto;
//# sourceMappingURL=update-chat_datum.dto.js.map