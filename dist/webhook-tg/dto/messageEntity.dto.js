"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEntityTypeDto = exports.MessageEntityDto = void 0;
class MessageEntityDto {
}
exports.MessageEntityDto = MessageEntityDto;
var MessageEntityTypeDto;
(function (MessageEntityTypeDto) {
    MessageEntityTypeDto[MessageEntityTypeDto["mention"] = 0] = "mention";
    MessageEntityTypeDto[MessageEntityTypeDto["hashtag"] = 1] = "hashtag";
    MessageEntityTypeDto[MessageEntityTypeDto["cashtag"] = 2] = "cashtag";
    MessageEntityTypeDto[MessageEntityTypeDto["bot_command"] = 3] = "bot_command";
    MessageEntityTypeDto[MessageEntityTypeDto["url"] = 4] = "url";
    MessageEntityTypeDto[MessageEntityTypeDto["email"] = 5] = "email";
    MessageEntityTypeDto[MessageEntityTypeDto["phone_number"] = 6] = "phone_number";
    MessageEntityTypeDto[MessageEntityTypeDto["bold"] = 7] = "bold";
    MessageEntityTypeDto[MessageEntityTypeDto["italic"] = 8] = "italic";
    MessageEntityTypeDto[MessageEntityTypeDto["underline"] = 9] = "underline";
    MessageEntityTypeDto[MessageEntityTypeDto["strikethrough"] = 10] = "strikethrough";
    MessageEntityTypeDto[MessageEntityTypeDto["spoiler"] = 11] = "spoiler";
    MessageEntityTypeDto[MessageEntityTypeDto["code"] = 12] = "code";
    MessageEntityTypeDto[MessageEntityTypeDto["pre"] = 13] = "pre";
    MessageEntityTypeDto[MessageEntityTypeDto["text_link"] = 14] = "text_link";
    MessageEntityTypeDto[MessageEntityTypeDto["text_mention"] = 15] = "text_mention";
    MessageEntityTypeDto[MessageEntityTypeDto["custom_emoji"] = 16] = "custom_emoji";
})(MessageEntityTypeDto || (exports.MessageEntityTypeDto = MessageEntityTypeDto = {}));
//# sourceMappingURL=MessageEntity.dto.js.map