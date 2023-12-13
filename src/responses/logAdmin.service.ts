import "dotenv/config"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import axios from "axios"
import { MessageTgEvent } from "./interfaces/MessageTgEvent.interface"

@Injectable()
export class LogAdminService {
	adminChannel: bigint = -1001524297397n

	constructor(adminChannel: bigint) {
		this.adminChannel = adminChannel
	}

	@OnEvent("successResponse.*", { async: true })
	async sendLogToAdmin(data: MessageTgEvent) {
		try {
			const adminChannel: bigint = -1001524297397n
			const text: string = encodeURI(
                `
                successResponse: ${data.type}\n
                group: ${data.response.chat.id}\n
                group type: ${data.response.chat.type}\n
                link: https://t.me/${data.response.chat.username}/${data.response.message_id}
                `
                )
			const response = await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
			return response.data.result
		} catch (error) {
			console.log(error)
		}
	}
}
