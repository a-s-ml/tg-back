import { Module } from "@nestjs/common"
import { ChatDataService } from "./chat-data.service"
import { ChatDataController } from "./chat-data.controller"

@Module({
	controllers: [ChatDataController],
	providers: [ChatDataService],
	exports: [ChatDataService]
})
export class ChatDataModule {}
