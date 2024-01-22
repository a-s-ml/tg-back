import "dotenv/config"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import axios from "axios"

@Injectable()
export class LogAdminService {

	@OnEvent("**")
    async sendLogToAdminGroupErrorResponse(text: string) {
		const adm: number = -1001524297397
		try {
			const res = await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adm}
				&text=${encodeURI(text)}
				&disable_web_page_preview=true
				&parse_mode=HTML 
				`
			)
			console.log(res)
		} catch (error) {
			console.log(error)
		}
    }

	@OnEvent("errorResponse.*")
    async sendLogToAdminGroupErrorResponse2(text: string) {
		const adm: number = -1001524297397
		try {
			const res = await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${adm}
				&text=${encodeURI(text)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
			console.log('logAdmin.service - 41: ', res)
		} catch (error) {
			console.log('logAdmin.service - 43: ', error)
		}
    }
}
