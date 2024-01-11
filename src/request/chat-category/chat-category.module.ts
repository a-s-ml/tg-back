import { Module } from "@nestjs/common"
import { ChatCategoryService } from "./chat-category.service"
import { ChatCategoryController } from "./chat-category.controller"
import { ChatService } from "../chat/chat.service"

@Module({
	controllers: [ChatCategoryController],
	providers: [ChatCategoryService, ChatService],
	exports: [ChatCategoryService]
})
export class ChatCategoryModule {}
