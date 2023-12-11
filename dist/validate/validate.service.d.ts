import { ValidateDto } from "./dto/validate.dto";
import "dotenv/config";
export declare class ValidateService {
    validateUser(validateString: ValidateDto): Promise<{
        validate: boolean;
        UserData: {
            query_id: string;
            user: any;
            auth_date: string;
        };
    }>;
}
