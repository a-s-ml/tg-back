import { Controller, Get, Param } from "@nestjs/common"
import { QuestionTypeService } from "./question-type.service"

@Controller("question-type")
export class QuestionTypeController {
	constructor(private readonly questionTypeService: QuestionTypeService) {}

	@Get()
	findAll() {
		return this.questionTypeService.findAll()
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.questionTypeService.findOne(+id)
	}
}
