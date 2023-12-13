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

	@OnEvent("newChatMember.*", { async: true })
    async sendLogToAdminText(text: string) {
        console.log('onEvent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
		try {
			const adminChannel: bigint = -1001524297397n
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) {
			console.log(error)
		}
    }

	@OnEvent("newChatMember.chatMember", { async: true })
    async sendLogToAdminText2(text: string) {
        console.log('onEvent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
		try {
			const adminChannel: bigint = -1001524297397n
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) {
			console.log(error)
		}
    }

	@OnEvent("successResponse.*", { async: true })
	async sendLogToAdmin(data: MessageTgEvent) {
        console.log('onEvent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
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
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adminChannel}
				&text=${text}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) {
			console.log(error)
		}
	}
}
