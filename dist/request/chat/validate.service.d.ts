import { ValidateDto } from "./dto/validate.dto";
import "dotenv/config";
import { ChatService } from "./chat.service";
export declare class ValidateService {
    private chatService;
    constructor(chatService: ChatService);
    validateUser(validateString: ValidateDto): Promise<{
        validate: boolean;
        UserData: {
            query_id: string;
            user: any;
            auth_date: string;
        };
    }>;
}
