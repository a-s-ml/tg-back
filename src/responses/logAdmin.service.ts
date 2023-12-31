import "dotenv/config"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import axios from "axios"

@Injectable()
export class LogAdminService {

	@OnEvent("**", { async: true })
    async sendLogToAdminGroupErrorResponse(text: string) {
		const adm: bigint = -1001524297397n
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adm}
				&text=${encodeURI(text)}
				&disable_web_page_preview=true
				&parse_mode=HTML 
				`
			)
		} catch (error) {
			console.log(error)
		}
    }

	@OnEvent("errorResponse.*", { async: true })
    async sendLogToAdminGroupErrorResponse2(text: string) {
		const adm: bigint = -1001524297397n
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adm}
				&text=${encodeURI(text)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) {
			console.log(error)
		}
    }
}
