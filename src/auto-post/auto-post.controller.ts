import { Controller, Get, Param } from "@nestjs/common"
import { AutoPostService } from "./auto-post.service"

@Controller("auto-post")
export class AutoPostController {
	constructor(private autoPostService: AutoPostService) {}

	@Get()
	questionTypePoll(
		@Param("question") question: string,
		@Param("chatid") id: string,
		@Param("chattype") type: string
	) {
		return this.autoPostService.questionTypePoll(+question, {
			chat: id as unknown as bigint,
			type: type
		})
	}
}
