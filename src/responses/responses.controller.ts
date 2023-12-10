import { Controller, Get } from "@nestjs/common"
import { ResponsesService } from "./responses.service"
import { AnswerCallbackQueryDto } from "src/webhook-tg/dto/answerCallbackQuery.dto"
import { SendMessageDto } from "src/webhook-tg/dto/sendMessage,dto"

@Controller("responses")
export class ResponsesController {
	constructor(private responsesService: ResponsesService) {}

	@Get()
	sendMessage(message: SendMessageDto) {
		return this.responsesService.sendMessage(message)
	}

	@Get()
	answerCallbackQuery(answerCallbackQuery: AnswerCallbackQueryDto) {
		return this.responsesService.answerCallbackQuery(answerCallbackQuery)
	}
}
