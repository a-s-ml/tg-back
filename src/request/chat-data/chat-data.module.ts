import { Module } from "@nestjs/common"
import { ChatDataService } from "./chat-data.service"
import { ChatDataController } from "./chat-data.controller"

@Module({
	controllers: [ChatDataController],
	providers: [ChatDataService]
})
export class ChatDataModule {}
