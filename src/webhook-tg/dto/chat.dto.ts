import { LocationDto } from "./Location.dto"
import { MessageDto } from "./Message.dto"

export class ChatDto {
	id: bigint
	type: string
	title?: string
	username?: string
	first_name?: string
	last_name?: string
	is_forum?: boolean
	photo?: object
	active_usernames?: object
	emoji_status_custom_emoji_id?: string
	emoji_status_expiration_date?: number
	bio?: string
	has_private_forwards?: boolean
	has_restricted_voice_and_video_messages?: boolean
	join_to_send_messages?: boolean
	join_by_request?: boolean
	description?: string
	invite_link?: string
	pinned_message?: MessageDto
	permissions?: object
	slow_mode_delay?: number
	message_auto_delete_time?: number
	has_aggressive_anti_spam_enabled?: boolean
	has_hidden_members?: boolean
	has_protected_content?: boolean
	sticker_set_name?: string
	can_set_sticker_set?: boolean
	linked_chat_id?: number
	location?: LocationDto
}
