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

	@Get("/clean/all")
	clean() {
		return this.chatService.clean()
	}

	@Get("groupMemberCountById/:chat")
	groupMemberCountById(@Param("chat") chat: bigint) {
		return this.chatService.groupMemberCountById(chat)
	}

	@Get("findByChatId/:chat")
	findByChatId(@Param("chat") chat: bigint) {
		return this.chatService.findByChatId(chat)
	}

	@Get("tgGetFilePhoto/:unic_id")
	// @Header("Content-type", "image/jpeg;base64") 
	async tgGetFilePhoto(@Param("unic_id") unic_id: string) {
		const response = await this.chatService.tgGetFilePhoto(unic_id)
		console.log(response)
		return response
	}

	@Patch(":chat")
	update(
		@Param("chat") chat: string,
		@Body() updateChatDto: Prisma.chatUpdateInput
	) {
		return this.chatService.update(chat as unknown as bigint, updateChatDto)
	}

	@Patch("updateTimeChat/:chat")
	updateTimeChat(
		@Param("chat") chat: string,
		@Body() time: Prisma.chatUpdateInput
	) {
		return this.chatService.updateTimeChat(chat as unknown as bigint, time)
	}

	@Patch("updateTypeChat/:chat")
	updateTypeChat(
		@Param("chat") chat: string,
		@Body() type: Prisma.chatUpdateInput
	) {
		return this.chatService.updateTypeChat(chat as unknown as bigint, type)
	}
}
