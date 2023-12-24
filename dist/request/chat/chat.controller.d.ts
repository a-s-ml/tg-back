import { ChatService } from "./chat.service";
import { Prisma } from "@prisma/client";
import { ValidateService } from "./validate.service";
import { ValidateDto } from "./dto/validate.dto";
export declare class ChatController {
    private readonly chatService;
    private readonly validateService;
    constructor(chatService: ChatService, validateService: ValidateService);
    validate(initData: ValidateDto): object;
    validateUserGet(initData: ValidateDto): Promise<{
        validate: boolean;
        UserData: {
            query_id: string;
            user: any;
            auth_date: string;
        };
    }>;
    update(chat: string, updateChatDto: Prisma.chatUpdateInput): Promise<void>;
}
