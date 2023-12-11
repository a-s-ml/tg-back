import { Injectable } from "@nestjs/common"
import { TimeService } from "src/request/time/time.service"
import { ActualityDto } from "./dto/actuality.dto"
import { ChatActiveService } from "src/request/chat-active/chat-active.service"
import { ChatDataService } from "src/request/chat-data/chat-data.service"
import { ChatService } from "src/request/chat/chat.service"
import { ResponsesService } from "src/responses/responses.service"

@Injectable()
export class SelectActivChatService {
	constructor(
		private readonly chatActiveService: ChatActiveService,
		private readonly chatDataService: ChatDataService,
		private readonly chatService: ChatService,
		private readonly timeService: TimeService,
		private readonly responsesService: ResponsesService
	) {}

	async activChat() {
		const chatact = await this.chatActiveService.findAll()
		let actiality: Array<ActualityDto> = []
		for (var key in chatact) {
			let lastPost = await this.chatDataService.findLastByChat(
				chatact[key].chat
			)
			if (!lastPost?.length) {
				actiality.push(chatact[key])
			}
			if (lastPost?.length) {
				let chat = await this.chatService.findByChatId(
					chatact[key].chat
				)
				let period = await this.timeService.findOne(chat.time)
				let currentTime = Math.round(
					Math.floor(new Date().getTime()) / 1000
				)
				let lastPostTime = lastPost[0].date
				let timeToLast = currentTime - lastPostTime
				let periodTime = period.period
				if (timeToLast > periodTime) {
					actiality.push(chatact[key])
				}
			}
		}
		const textLog =  JSON.stringify(actiality,(key, value) => (typeof value === 'bigint' ? value.toString() : value))

		await this.responsesService.sendLogToAdmin(textLog)
		return actiality
	}
}
