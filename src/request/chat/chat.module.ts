import { Module } from "@nestjs/common"
import { ChatService } from "./chat.service"
import { ChatController } from "./chat.controller"
import { ResponsesModule } from "src/responses/responses.module"

@Module({
	imports: [ResponsesModule],
	controllers: [ChatController],
	providers: [ChatService],
	exports: [ChatService]
})
export class ChatModule {}
