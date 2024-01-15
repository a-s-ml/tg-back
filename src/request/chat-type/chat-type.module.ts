import { Global, Module } from "@nestjs/common"
import { ChatTypeService } from "./chat-type.service"
import { ChatTypeController } from "./chat-type.controller"

@Global()
@Module({
	controllers: [ChatTypeController],
	providers: [ChatTypeService],
	exports: [ChatTypeService]
})
export class ChatTypeModule {}
