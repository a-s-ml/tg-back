import { Module } from "@nestjs/common"
import { ChatService } from "./chat.service"
import { ChatController } from "./chat.controller"
import { ResponsesModule } from "src/responses/responses.module"
import { ValidateService } from "./validate.service"
import { AnswerModule } from "../answer/answer.module"
import { QuestionModule } from "../question/question.module"
import { ChatActiveModule } from "../chat-active/chat-active.module"

@Module({
	imports: [ResponsesModule, AnswerModule, QuestionModule, ChatActiveModule],
	controllers: [ChatController],
	providers: [ChatService, ValidateService],
	exports: [ChatService]
})
export class ChatModule {}
