import { ChatService } from "./chat.service";
import { responseUserDataInterface } from "./dto/responseUserData.interface";
import "dotenv/config";
export declare class ValidateService {
    private chatService;
    constructor(chatService: ChatService);
    validateUser(initData: string): Promise<{
        validate: boolean;
        UserData: responseUserDataInterface;
        group: any;
    }>;
}
