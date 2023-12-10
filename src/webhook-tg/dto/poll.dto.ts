import { MessageEntityDto } from "./MessageEntity.dto"
import { PoolOptionsDto } from "./pollOptions.dto"

export class PollDto {
	id: string
	question: string
	options: PoolOptionsDto
	total_voter_count?: number
	is_closed?: boolean
	is_anonymous?: boolean
	type?: string
	allows_multiple_answers?: boolean
	correct_option_id?: number
	explanation?: string
	explanation_entities?: MessageEntityDto
	open_period?: number
	close_date?: number
}
