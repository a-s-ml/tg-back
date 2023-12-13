import { Injectable } from "@nestjs/common"
import { ValidateDto } from "./dto/validate.dto"
import { createHmac } from "crypto"
import "dotenv/config"
import { ChatService } from "./chat.service"

@Injectable()
export class ValidateService {
	constructor(
		private chatService: ChatService,
	) {}

	async validateUser(validateString: ValidateDto) {
		const urlParams = new URLSearchParams(validateString.initData)
		const hash = urlParams.get("hash")
		urlParams.delete("hash")
		urlParams.sort()

		const UserData = {
			query_id: urlParams.get("query_id"),
			user: JSON.parse(urlParams.get("user")),
			auth_date: urlParams.get("auth_date")
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

		return { validate, UserData }
	}
}