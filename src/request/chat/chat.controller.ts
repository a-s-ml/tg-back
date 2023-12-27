import { Controller, Body, Patch, Param, Get } from "@nestjs/common"
import { ChatService } from "./chat.service"
import { Prisma } from "@prisma/client"
import { ValidateService } from "./validate.service"

@Controller("chat")
export class ChatController {
	constructor(
		private readonly chatService: ChatService,
		private readonly validateService: ValidateService
	) {}

	@Get("validateUser/:initData")
	initData(@Param("initData") initData: string) {
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
