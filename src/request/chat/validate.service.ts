import { Injectable } from "@nestjs/common"
import { ChatService } from "./chat.service"
import { createHmac } from "crypto"
import { QuestionService } from "../question/question.service"
import { AnswerService } from "../answer/answer.service"
import { responseUserDataInterface } from "./models/responseUserData.interface"
import { responseValidateInterface } from "./models/responseValidate.interface"
import "dotenv/config"
import { ChatActiveService } from "../chat-active/chat-active.service"
import { responseProgressDataInterface } from "./models/responseProgressData.interface"
import { responseGroupsProgressInterface } from "./models/responseGroupsProgress.interface"
import { responseAnswersProgressInterface } from "./models/responseAnswersProgress,interface"
import { responseQuestionsProgressInterface } from "./models/responseQuestionsProgress.interface"
import { EventInterface } from "./models/events.interface"
import { EventEmitter2 } from "@nestjs/event-emitter"

@Injectable()
export class ValidateService {
	constructor(
		private chatService: ChatService,
		private questionService: QuestionService,
		private answerService: AnswerService,
		private chatActiveService: ChatActiveService,
		private eventEmitter: EventEmitter2
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

		const groupsAll = await this.chatService.countByReferal(
			UserData.user.id
		)
		const groupsActive = await this.chatActiveService.countActiveByReferal(
			UserData.user.id
		)
		const groupsProgress: responseGroupsProgressInterface = {
			groupsAll,
			groupsActive
		}

		const questionsAll = await this.questionService.countByChatId(
			UserData.user.id
		)
		const questionsModerate =
			await this.questionService.countModerateByChatId(UserData.user.id)
		const questionsProgress: responseQuestionsProgressInterface = {
			questionsAll,
			questionsModerate
		}

		const answersAll = await this.answerService.countByChatId(
			UserData.user.id
		)
		const answersRight = await this.answerService.countRiightByChatId(
			UserData.user.id
		)
		const answersProgress: responseAnswersProgressInterface = {
			answersAll,
			answersRight
		}

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

		let response: responseValidateInterface
		let ProgressData: responseProgressDataInterface
		ProgressData = { groupsProgress, questionsProgress, answersProgress }

		const event = new EventInterface()
		event.name = "webAppValidate"
		event.description = `chat: #id${UserData.user.id}\nvalidate: #${String(
			validate
		)}\ngroups: ${ProgressData.groupsProgress.groupsAll}\nanswers: ${
			ProgressData.answersProgress.answersAll
		}\nquestions: ${ProgressData.questionsProgress.questionsAll}`
		this.eventEmitter.emit("event", event)

		return (response = { validate, UserData, ProgressData })
	}
}
