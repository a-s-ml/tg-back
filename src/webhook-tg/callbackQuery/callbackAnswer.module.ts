import { Module } from "@nestjs/common"

import { CallbackAnswerService } from "./callbackAnswer.service"

import { ChatModule } from "src/request/chat/chat.module"
import { QuestionModule } from "src/request/question/question.module"
import { AnswerModule } from "src/request/answer/answer.module"
import { ChatDataService } from "src/request/chat-data/chat-data.service"

@Module({
	imports: [ChatModule, QuestionModule, AnswerModule],
	providers: [CallbackAnswerService,ChatDataService],
	exports: [CallbackAnswerService]
})
export class CallbackAnswerModule {}
