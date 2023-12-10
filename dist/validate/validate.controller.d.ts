import { validateDto } from "./dto/validate.dto";
import { ValidateService } from "./validate.service";
export declare class ValidateController {
    private validateService;
    constructor(validateService: ValidateService);
    validate(validateString: validateDto): object;
}
