import { ValidateDto } from "./dto/validate.dto";
import { ChatService } from "./chat.service";
import { responseUserDataInterface } from "./dto/responseUserData.interface";
import "dotenv/config";
export declare class ValidateService {
    private chatService;
    constructor(chatService: ChatService);
    validateUser(validateString: ValidateDto): Promise<{
        validate: boolean;
        UserData: responseUserDataInterface;
        group: string;
    }>;
    validateUserGet(initData: string): Promise<{
        validate: boolean;
        UserData: responseUserDataInterface;
        group: string;
    }>;
}
