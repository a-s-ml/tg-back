import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete
} from "@nestjs/common"
import { ChatActiveService } from "./chat-active.service"
import { Prisma } from "@prisma/client"

@Controller("chat-active")
export class ChatActiveController {
	constructor(private readonly chatActiveService: ChatActiveService) {}

	@Post()
	create(@Body() createChatActiveDto: Prisma.chatActiveCreateInput) {
		return this.chatActiveService.create(createChatActiveDto)
	}

	@Get()
	findAll() {
		return this.chatActiveService.findAll()
	}

	@Get(":chat")
	findOne(@Param("chat") chat: string) {
		return this.chatActiveService.findOne(chat as unknown as bigint)
	}

	@Delete(":chat")
	remove(@Param("chat") chat: string) {
		return this.chatActiveService.remove(chat as unknown as bigint)
	}

	@Get("clean/")
	clean() {
		return this.chatActiveService.clean()
	}
}
