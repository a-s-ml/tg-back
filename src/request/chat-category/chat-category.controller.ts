import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common"
import { ChatCategoryService } from "./chat-category.service"
import { Prisma } from "@prisma/client"

@Controller("chat-category")
export class ChatCategoryController {
	constructor(private readonly chatCategoryService: ChatCategoryService) {}

	@Post()
	create(@Body() createChatCategoryDto: Prisma.chatCategoryCreateInput) {
		return this.chatCategoryService.create(createChatCategoryDto)
	}

	@Get(":chat")
	findOne(@Param("chat") chat: string) {
		return this.chatCategoryService.findChat(chat as unknown as bigint)
	}

	@Delete()
	remove(@Body() deleteChatCategoryDto: Prisma.chatCategoryCreateInput) {
		return this.chatCategoryService.remove(deleteChatCategoryDto)
	}
}
