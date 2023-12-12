import { Injectable } from "@nestjs/common"
import { InlineKeyboardMarkupInterface } from "src/interfaces/types/InlineKeyboardMarkup.interface"
import { QuestionService } from "src/request/question/question.service"

@Injectable()
export class BuildKeyboardService {
	constructor(private questionService: QuestionService) {}
	async statInlineKeboard() {
		const replyMarkup: InlineKeyboardMarkupInterface = {
			inline_keyboard: [
				[
					{
						text: "Больше вопросов",
						url: `https://t.me/+cI0Ubxv51wJhMTFi`
					}
				]
			]
		}
		return replyMarkup
	}

	async questionInlineKeboard(id: number) {
		const answers = await this.questionService.findOneAnswers(id)
		const replyMarkup: InlineKeyboardMarkupInterface = {
			inline_keyboard: [
				[
					{
						text: answers.answer1,
						callback_data: `answer_${id}_1`
					}
				],
				[
					{
						text: answers.answer2,
						callback_data: `answer_${id}_2`
					}
				],
				[
					{
						text: answers.answer3,
						callback_data: `answer_${id}_3`
					}
				],
				[
					{
						text: answers.answer4,
						callback_data: `answer_${id}_4`
					}
				]
			]
		}
		return replyMarkup
	}
}
