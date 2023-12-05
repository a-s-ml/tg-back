export type InlineKeyboardButtonDto = {
    text: string
    callback_data: string
}

export type ReplyMarkup = {
    resize_keyboard: boolean
    inline_keyboard: Array<Array<InlineKeyboardButtonDto>>
}