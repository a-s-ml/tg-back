import { Controller, Body, Patch, Param, Get, Header } from "@nestjs/common"
import { ChatService } from "./chat.service"
import { Prisma } from "@prisma/client"
import { ValidateService } from "./validate.service"

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

	@Get("groupMemberCountById/:chat")
	groupMemberCountById(@Param("chat") chat: bigint) {
		return this.chatService.groupMemberCountById(chat)
	}

	@Get("tgGetFilePhoto/:unic_id")
	tgGetFilePhoto(@Param("unic_id") unic_id: string) {
		return this.chatService.tgGetFilePhoto(unic_id)
	}

	@Patch(":chat")
	update(
		@Param("chat") chat: string,
		@Body() updateChatDto: Prisma.chatUpdateInput
	) {
		return this.chatService.update(chat as unknown as bigint, updateChatDto)
	}
}
