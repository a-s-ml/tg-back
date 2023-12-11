import { Body, Controller, Post } from "@nestjs/common"
import { ValidateDto } from "./dto/validate.dto"
import { ValidateService } from "./validate.service"

@Controller("validate")
export class ValidateController {
	constructor(private validateService: ValidateService) {}

	@Post()
	validate(@Body() initData: ValidateDto): object {
		return this.validateService.validateUser(initData)
	}
}
