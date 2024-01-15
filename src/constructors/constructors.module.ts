import { Module } from "@nestjs/common"

import { QuestionModule } from "src/request/question/question.module"
import { CategoryModule } from "src/request/category/category.module"

import { BuildQuestionService } from "./questions/build-question.service"
import { BuildKeyboardService } from "./keyboard/build-keyboard.service"
import { BuildStatListService } from "./statList/build-statList.service"

import { AnswerModule } from "src/request/answer/answer.module"
@Module({
	imports: [QuestionModule, AnswerModule],
	providers: [
		BuildQuestionService,
		BuildKeyboardService,
		BuildStatListService
	],
	exports: [BuildQuestionService, BuildStatListService, BuildKeyboardService]
})
export class ConstructorsModule {}
