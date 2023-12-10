import { Module } from "@nestjs/common"
import { ChatActiveService } from "./chat-active.service"
import { ChatActiveController } from "./chat-active.controller"

@Module({
	controllers: [ChatActiveController],
	providers: [ChatActiveService]
})
export class ChatActiveModule {}
