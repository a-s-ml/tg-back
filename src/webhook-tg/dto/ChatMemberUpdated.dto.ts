import { ChatMemberDto } from "./ChatMember.dto"
import { ChatDto } from "./chat.dto"
import { UserDto } from "./user.dto"

export class ChatMemberUpdatedDto {
	chat: ChatDto
	from: UserDto
	date: number
	old_chat_member: ChatMemberDto
	new_chat_member: ChatMemberDto
	invite_link?: string
	via_chat_folder_invite_link?: string
}
