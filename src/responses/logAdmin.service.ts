import "dotenv/config"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import axios from "axios"

@Injectable()
export class LogAdminService {

	@OnEvent("errorResponse.*", { async: true })
    async sendLogToAdminGroupErrorResponse(text: string) {
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=-1001524297397
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
