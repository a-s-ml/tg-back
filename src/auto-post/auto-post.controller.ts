import { Controller, Get, Param} from "@nestjs/common"
import { SelectQuestionService } from "./select-questions.service"

@Controller("auto-post")
export class AutoPostController {
	constructor(private selectQuestionService: SelectQuestionService) {}
    
	@Get("countAvailableQuestionByChatId/:id")
	countAvailableQuestionByChatId(@Param("id") id: bigint) {
		return this.selectQuestionService.countAvailableQuestionByChatId(id)
	}

	@Get("countPublishedQuestion/:id")
	countPublishedQuestion(@Param("id") id: bigint) {
		return this.selectQuestionService.countPublishedQuestion(id)
	}
}
