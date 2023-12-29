import { Module } from "@nestjs/common"

import { AutoPostService } from "./auto-post.service"
import { SelectQuestionService } from "./select-questions.service"
import { SelectActivChatService } from "./select-activ-chat.service"

import { QuestionModule } from "src/request/question/question.module"
import { ConstructorsModule } from "src/constructors/constructors.module"
import { ChatModule } from "src/request/chat/chat.module"
import { ChatDataModule } from "src/request/chat-data/chat-data.module"
import { ChatCategoryModule } from "src/request/chat-category/chat-category.module"
import { ResponsesModule } from "src/responses/responses.module"
import { AutoPostController } from "./auto-post.controller"
import { ChatActiveModule } from "src/request/chat-active/chat-active.module"
import { TimeModule } from "src/request/time/time.module"

@Module({
	imports: [
		QuestionModule,
		ChatDataModule,
		ChatCategoryModule,
		ConstructorsModule,
		ChatActiveModule,
		ChatModule,
		TimeModule,
		ResponsesModule
	],
	providers: [AutoPostService, SelectActivChatService, SelectQuestionService],
	exports: [AutoPostService, SelectActivChatService, SelectQuestionService],
	controllers: [AutoPostController]
})
export class AutoPostModule {}
