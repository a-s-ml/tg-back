import { Injectable } from "@nestjs/common"
import { TimeService } from "src/request/time/time.service"
import { ChatActiveService } from "src/request/chat-active/chat-active.service"
import { ChatDataService } from "src/request/chat-data/chat-data.service"
import { ChatService } from "src/request/chat/chat.service"
import { IChatActive } from "src/interfaces/types/db/IChatActive.interface"

@Injectable()
export class SelectActivChatService {
	constructor(
		private readonly chatActiveService: ChatActiveService,
		private readonly chatDataService: ChatDataService,
		private readonly chatService: ChatService,
		private readonly timeService: TimeService
	) {}

	async activChat() {
		const chatact = await this.chatActiveService.findAll()
		let actiality: Array<IChatActive> = []
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
		return actiality
	}
}
