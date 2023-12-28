import { Controller, Body, Patch, Param, Get } from "@nestjs/common"
import { ChatService } from "./chat.service"
import { Prisma } from "@prisma/client"
import { ValidateService } from "./validate.service"
import { GetTgService } from "src/responses/getTgAPI.service"

@Controller("chat")
export class ChatController {
	constructor(
		private chatService: ChatService,
		private validateService: ValidateService
	) {}

	@Get("validateUser/:initData")
	initData(@Param("initData") initData: string) {
		return this.validateService.validateUser(initData)
	}

	@Get("findByReferal/:chat")
	findByReferal(@Param("chat") chat: bigint) {
		return this.chatService.findByReferal(chat)
	}

	@Get("groupInfoById/:chat")
	groupInfoById(@Param("chat") chat: bigint) {
		return this.chatService.groupInfoById(chat)
	}

	@Patch(":chat")
	update(
		@Param("chat") chat: string,
		@Body() updateChatDto: Prisma.chatUpdateInput
	) {
		return this.chatService.update(chat as unknown as bigint, updateChatDto)
	}
}
