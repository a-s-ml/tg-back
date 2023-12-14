import { Module } from "@nestjs/common"

import { AppService } from "./app.service"

import { AppController } from "./app.controller"

import { DbModule } from "./db/db.module"
import { ResponsesModule } from "./responses/responses.module"
import { ScheduleModule } from "@nestjs/schedule"
import { AutoPostModule } from "./auto-post/auto-post.module"
import { CategoryModule } from "./request/category/category.module"
import { WebhookTgModule } from "./webhook-tg/webhook-tg.module"
import { ChatModule } from "./request/chat/chat.module"
import { ChatDataModule } from "./request/chat-data/chat-data.module"
import { ChatActiveModule } from "./request/chat-active/chat-active.module"
import { ChatCategoryModule } from "./request/chat-category/chat-category.module"
import { TimeModule } from "./request/time/time.module"
import { QuestionTypeModule } from "./request/question-type/question-type.module"
import { EventEmitterModule } from "@nestjs/event-emitter"
import { LogAdminService } from "./responses/logAdmin.service"

@Module({
	imports: [
		EventEmitterModule.forRoot(),
		ScheduleModule.forRoot(),
		DbModule,
		ResponsesModule,
		AutoPostModule,
		CategoryModule,
		WebhookTgModule,
		ChatModule,
		ChatDataModule,
		ChatActiveModule,
		ChatCategoryModule,
		TimeModule,
		QuestionTypeModule
	],
	controllers: [AppController],
	providers: [AppService, LogAdminService]
})
export class AppModule {}
