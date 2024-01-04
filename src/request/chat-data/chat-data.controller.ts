import {
	Controller,
	Get,
	Post,
	Body,
	Param
} from "@nestjs/common"
import { ChatDataService } from "./chat-data.service"
import { Prisma } from "@prisma/client"

@Controller("chat-data")
export class ChatDataController {
	constructor(private readonly chatDataService: ChatDataService) {}

	@Post()
	create(@Body() createChatDatumDto: Prisma.chatDataCreateInput) {
		return this.chatDataService.create(createChatDatumDto)
	}

	@Get(":group")
	findLastByChat(@Param("group") group: string) {
		return this.chatDataService.findLastByChat(group as unknown as bigint)
	}

	@Get(":group")
	findAllByChat(@Param("group") group: string) {
		return this.chatDataService.findAllByChat(group as unknown as bigint)
	}

	@Get("findTypeLastTwoByChat/:group")
	findTypeLastTwoByChat(@Param("group") group: string) {
		return this.chatDataService.findTypeLastTwoByChat(group as unknown as bigint)
	}
}
