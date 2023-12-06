export type InlineKeyboardButtonDto = {
    text: string
    callback_data: string
}

export type ReplyMarkupDto = {
    resize_keyboard: boolean
    inline_keyboard: Array<Array<InlineKeyboardButtonDto>>
}