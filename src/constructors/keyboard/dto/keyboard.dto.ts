export type InlineKeyboardButtonDto = {
	text: string
	callback_data?: string
	url?: string

	switch_inline_query?: string
	switch_inline_query_current_chat?: string
}

export type ReplyMarkupDto = {
	resize_keyboard: boolean
	inline_keyboard: Array<Array<InlineKeyboardButtonDto>>
}

export type EditMessageReplyMarkupDto = {
	chat_id?: number
	message_id?: number
	inline_message_id?: string
	reply_markup: ReplyMarkupDto
}
