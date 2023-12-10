import { validateDto } from "./dto/validate.dto";
import "dotenv/config";
export declare class ValidateService {
    validateUser(validateString: validateDto): Promise<{
        validate: boolean;
        UserData: {
            query_id: string;
            user: any;
            auth_date: string;
        };
    }>;
}
