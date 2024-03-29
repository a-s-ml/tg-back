import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete
} from "@nestjs/common"
import { QuestionService } from "./question.service"
import { Prisma } from "@prisma/client"

@Controller("question")
export class QuestionController {
	constructor(private questionService: QuestionService) {}

	@Post()
	create(@Body() createQuestionDto: Prisma.questionCreateInput) {
		return this.questionService.create(createQuestionDto)
	}

	@Get()
	findAll() {
		return this.questionService.findAll()
	}

	@Get("findByChatId/:chat")
	findByChatId(@Param("chat") chat: bigint) {
		return this.questionService.findByChatId(chat)
	}

	@Get("findById/:id")
	findOne(@Param("id") id: string) {
		return this.questionService.findOne(+id)
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateQuestionDto: Prisma.questionUpdateInput
	) {
		return this.questionService.update(+id, updateQuestionDto)
	}

	@Get("countReward/:id")
	countReward(@Param("id") id: string) {
		return this.questionService.countReward(+id)
	}

	@Get("count/:id")
	count(@Param("id") id: string) {
		return this.questionService.count(+id)
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.questionService.remove(+id)
	}
}
