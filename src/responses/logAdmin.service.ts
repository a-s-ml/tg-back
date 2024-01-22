import "dotenv/config"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import axios from "axios"
import { EventInterface } from "src/request/chat/models/events.interface"

@Injectable()
export class LogAdminService {
	// @OnEvent("**")
	// async sendLogToAdminGroupErrorResponse(text: string) {
	// 	const adm: number = -1001524297397
	// 	try {
	// 		const res = await axios.get(
	// 			`
	// 			${process.env.SEND_MESSAGE}
	// 			chat_id=${adm}
	// 			&text=${encodeURI(text)}
	// 			&disable_web_page_preview=true
	// 			&parse_mode=HTML
	// 			`
	// 		)
	// 		console.log(res)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// @OnEvent("errorResponse.*")
	// async sendLogToAdminGroupErrorResponse2(text: string) {
	// 	const adm: number = -1001524297397
	// 	try {
	// 		const res = await axios.get(
	// 			`
	// 			${process.env.SEND_MESSAGE}
	// 			chat_id=${adm}
	// 			&text=${encodeURI(text)}
	// 			&disable_web_page_preview=true
	// 			&parse_mode=HTML
	// 			`
	// 		)
	// 		console.log('logAdmin.service - 41: ', res)
	// 	} catch (error) {
	// 		console.log('logAdmin.service - 43: ', error)
	// 	}
	// }

	@OnEvent("message.send")
	async handleOrderCreatedEvent(event: EventInterface) {
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=-1001524297397
				&text=${encodeURI(JSON.stringify(event))}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) {}
	}
}
