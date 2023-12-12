import { Injectable } from "@nestjs/common"
import { QuestionService } from "src/request/question/question.service"
import { BuildKeyboardService } from "../keyboard/build-keyboard.service"
import { CategoryService } from "src/request/category/category.service"
import { IQuestion } from "src/interfaces/types/db/IQuestion.interface"
import { IQuestionTextBodyInteface } from "src/interfaces/types/others/IQuestionTextBody.interface"
import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method"
import { SendPhotoMethod } from "src/interfaces/metods/sendPhoto.method"
import { SendPollMethod } from "src/interfaces/metods/sendPoll.method"

@Injectable()
export class BuildQuestionService {
	constructor(
		private questionService: QuestionService,
		private buildKeyboardService: BuildKeyboardService,
		private categoryService: CategoryService
	) {}

	async questionBody(question: IQuestion) {
		const category = await this.categoryService.findOne(question.category)
		const header = `<b>Вопрос:</b> №${question.id}\n<b>Категория</b>: ${category.name}\n<b>Сложность:</b> ${question.reward}\n\n`
		const footer =
			'| <b><a href="">Статистика</a></b> | <b><a href="">Ошибка</a></b> |'
		let body: IQuestionTextBodyInteface
		return (body = {
			header: encodeURI(header),
			text: encodeURI(question.text + "\n\n"),
			footer: encodeURI(footer)
		})
	}

	async questionText(id: number, chat: bigint) {
		const question = await this.questionService.findOne(id)
		const reply_markup =
			await this.buildKeyboardService.questionInlineKeboard(question.id)
		const body = await this.questionBody(question)
		const url: SendMessageMethod = {
			chat_id: chat,
			text: body.header + body.text + body.footer,
			reply_markup: reply_markup,
			disable_web_page_preview: true,
			parse_mode: "HTML"
		}
		console.log(url)
		return url
	}
	async questionPoll(id: number, chat: bigint, type: string) {
		let is_anonymous: boolean;
		is_anonymous = false
		if(type === 'channel') {
			is_anonymous = true
		}
		const question = await this.questionService.findOne(id)
		const url: SendPollMethod = {
			chat_id: chat,
			question: encodeURI(question.text),
			options: [
				question.answer1,
				question.answer2,
				question.answer3,
				question.answer4
			],
			correct_option_id: question.answerright,
			is_anonymous: is_anonymous
		}
		console.log(url)
		return url
	}
	async questionImg(id: number, chat: bigint) {
		const question = await this.questionService.findOne(id)
		const reply_markup =
			await this.buildKeyboardService.questionInlineKeboard(question.id)
		const body = await this.questionBody(question)
		const url: SendPhotoMethod = {
			chat_id: chat,
			caption: body.header + body.footer,
			photo: question.img,
			reply_markup: reply_markup
		}
		console.log(url)
		return url
	}
}
