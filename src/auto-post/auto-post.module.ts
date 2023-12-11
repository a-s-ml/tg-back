import { Module } from "@nestjs/common"

import { AutoPostService } from "./auto-post.service"
import { SelectQuestionService } from "./select-questions.service"
import { SelectActivChatService } from "./select-activ-chat.service"

import { QuestionModule } from "src/request/question/question.module"
import { ConstructorsModule } from "src/constructors/constructors.module"
import { TimeService } from "src/request/time/time.service"
import { ChatModule } from "src/request/chat/chat.module"
import { ChatService } from "src/request/chat/chat.service"
import { ChatDataModule } from "src/request/chat-data/chat-data.module"
import { ChatDataService } from "src/request/chat-data/chat-data.service"
import { ChatCategoryModule } from "src/request/chat-category/chat-category.module"
import { ChatActiveService } from "src/request/chat-active/chat-active.service"
import { ResponsesModule } from "src/responses/responses.module"

@Module({
	imports: [
		QuestionModule,
		ChatDataModule,
		ChatCategoryModule,
		ConstructorsModule,
		ChatModule,
		ResponsesModule
	],
	providers: [
		AutoPostService,
		SelectActivChatService,
		SelectQuestionService,
		ChatActiveService,
		ChatDataService,
		ChatService,
		TimeService
	],
	exports: [AutoPostService, SelectActivChatService, SelectQuestionService]
})
export class AutoPostModule {}
