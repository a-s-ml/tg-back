import { ChatService } from "./chat.service";
import { Prisma } from "@prisma/client";
import { ValidateService } from "./validate.service";
import { ValidateDto } from "./dto/validate.dto";
export declare class ChatController {
    private readonly chatService;
    private readonly validateService;
    constructor(chatService: ChatService, validateService: ValidateService);
    validate(initData: ValidateDto): object;
    update(chat: string, updateChatDto: Prisma.chatUpdateInput): Promise<void>;
    findByReferal2(id: string): Promise<string[]>;
}
