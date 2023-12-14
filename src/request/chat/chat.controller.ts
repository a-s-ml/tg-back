import { Controller, Post, Body, Patch, Param } from "@nestjs/common"
import { ChatService } from "./chat.service"
import { Prisma } from "@prisma/client"
import { ValidateService } from "./validate.service"
import { ValidateDto } from "./dto/validate.dto"

@Controller("chat")
export class ChatController {
	constructor(
		private readonly chatService: ChatService,
		private readonly validateService: ValidateService
	) {}

	@Post("validateUser")
	validate(@Body() initData: ValidateDto): object {
		return this.validateService.validateUser(initData)
	}

	@Patch(":chat")
	update(
		@Param("chat") chat: string,
		@Body() updateChatDto: Prisma.chatUpdateInput
	) {
		return this.chatService.update(chat as unknown as bigint, updateChatDto)
	}
}
