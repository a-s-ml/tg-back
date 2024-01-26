import { Controller, Get, Param} from "@nestjs/common"
import { SelectQuestionService } from "./select-questions.service"

@Controller("auto-post")
export class AutoPostController {
	constructor(private selectQuestionService: SelectQuestionService) {}
    
	@Get("countAvailableQuestionByChatId/:id")
	getStatChat(@Param("id") id: bigint) {
		return this.selectQuestionService.countAvailableQuestionByChatId(id)
	}
}
