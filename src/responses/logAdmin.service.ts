import "dotenv/config"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import axios from "axios"
import { EventInterface } from "src/request/chat/models/events.interface"

@Injectable()
export class LogAdminService {
	@OnEvent("event")
	async handleOrderCreatedEvent(event: EventInterface) {
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=-4160175743
				&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) {}
	}

	@OnEvent("event")
	async eventPost(event: EventInterface) {
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=-4142771123
				&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) {}
	}
}
