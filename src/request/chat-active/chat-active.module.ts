import { Module } from "@nestjs/common"
import { ChatActiveService } from "./chat-active.service"
import { ChatActiveController } from "./chat-active.controller"
import { ChatService } from "../chat/chat.service"

@Module({
	imports: [],
	controllers: [ChatActiveController],
	providers: [ChatActiveService, ChatService],
	exports: [ChatActiveService]
})
export class ChatActiveModule {}
