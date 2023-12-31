import { Injectable } from "@nestjs/common"
import { BuildKeyboardService } from "../keyboard/build-keyboard.service"
import { AnswerService } from "src/request/answer/answer.service"
import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method"

@Injectable()
export class BuildStatListService {
	constructor(
		private buildKeyboardService: BuildKeyboardService,
		private answerService: AnswerService
	) {}

	async statStandart(id: bigint) {
		const answers = await this.answerService.getStatChat(id)
		let text: string = "Рейтинг участников викторины за текущий месяц:\n\n"
		let id_userstat: number = 1

		answers.length > 0 &&
			answers?.map(async item => {
				text =
					text +
					`${id_userstat}. ${
						item.chat
					} \u2013 ${item._sum.reward.toFixed(2)}очк. (${
						item._count.id
					} отв.)\n`
				id_userstat++
			})
		const reply_markup = await this.buildKeyboardService.statInlineKeboard()
		const url: SendMessageMethod = {
			chat_id: 521884639n,
			text: encodeURI(text),
			reply_markup,
			disable_web_page_preview: true,
			parse_mode: "HTML"
		}
		return url
	}
}
