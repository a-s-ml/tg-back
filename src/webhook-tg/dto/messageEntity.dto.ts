import { UserDto } from "./user.dto"

export class MessageEntityDto {
    type: string
    offset: number
    length: number
    url?: string
    user?: UserDto
    language?: string
    custom_emoji_id?: boolean
}