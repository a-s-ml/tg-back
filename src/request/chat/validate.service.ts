import { Injectable } from "@nestjs/common"
import { ChatService } from "./chat.service"
import { createHmac } from "crypto"
import { QuestionService } from "../question/question.service"
import { AnswerService } from "../answer/answer.service"
import { responseUserDataInterface } from "./dto/responseUserData.interface"
import { responseValidateInterface } from "./dto/responseValidate.interface"
import "dotenv/config"

@Injectable()
export class ValidateService {
	constructor(
		private chatService: ChatService,
		private questionService: QuestionService,
		private answerService: AnswerService,
	) {}

	async validateUser(initData: string) {
		console.log(initData)
		const urlParams = new URLSearchParams(initData)
		const hash = urlParams.get("hash")
		urlParams.delete("hash")
		urlParams.sort()

		const UserData: responseUserDataInterface = {
			query_id: urlParams.get("query_id"),
			user: JSON.parse(urlParams.get("user")),
			auth_date: urlParams.get("auth_date")
		}

		const groups = await this.chatService.countByReferal(UserData.user.id)
		const questions = await this.questionService.countByChatId(UserData.user.id)
		const answers = await this.answerService.countByChatId(UserData.user.id)

		let dataCheckString = ""
		for (const [key, value] of urlParams.entries()) {
			dataCheckString += `${key}=${value}\n`
		}
		dataCheckString = dataCheckString.slice(0, -1)

		const secret = createHmac("sha256", "WebAppData").update(
			process.env.TOKEN ?? ""
		)
		const calculatedHash = createHmac("sha256", secret.digest())
			.update(dataCheckString)
			.digest("hex")

		const validate = calculatedHash === hash

		let response: responseValidateInterface;

		return response = { validate, UserData, groups, questions, answers }
	}
}
