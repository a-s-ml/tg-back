import { Body, Controller, Post } from '@nestjs/common';
import { validateDto } from './dto/validate.dto';
import { ValidateService } from './validate.service';

@Controller('validate')
export class ValidateController {

    constructor(private readonly validateService: ValidateService) { }

    @Post()
    validate(@Body() validateString: validateDto): object {
        return this.validateService.validateUser(validateString)
    }

}
