import { ChatDto } from "./chat.dto"
import { UserDto } from "./user.dto"

export class PollAnswerDto {
	poll_id: string
	voter_chat?: ChatDto
	user?: UserDto
	option_ids?: object
}
