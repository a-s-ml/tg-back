import { UserDto } from "./user.dto"

export class MessageEntityDto {
	type: string
	offset: number
	length: number
	url?: string //For “text_link” only
	user?: UserDto //For “text_mention” only
	language?: string //For “pre” only, the programming language of the entity text
	custom_emoji_id?: boolean //For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker
}

export enum MessageEntityTypeDto {
	mention,
	hashtag,
	cashtag,
	bot_command,
	url,
	email,
	phone_number,
	bold,
	italic,
	underline,
	strikethrough,
	spoiler,
	code,
	pre,
	text_link,
	text_mention,
	custom_emoji
}
