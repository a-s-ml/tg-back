import { Global, Module } from "@nestjs/common"
import { QuestionTypeService } from "./question-type.service"
import { QuestionTypeController } from "./question-type.controller"

@Global()
@Module({
	controllers: [QuestionTypeController],
	providers: [QuestionTypeService],
	exports: [QuestionTypeService]
})
export class QuestionTypeModule {}
