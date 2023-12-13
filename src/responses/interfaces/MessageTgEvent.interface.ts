import { SendMessageMethod } from "src/interfaces/metods/sendMessage.method"
import { SendPhotoMethod } from "src/interfaces/metods/sendPhoto.method"
import { SendPollMethod } from "src/interfaces/metods/sendPoll.method"
import { MessageInterface } from "src/interfaces/types/Message.interface"

export class MessageTgEvent {
	type: string
	message: SendPhotoMethod | SendMessageMethod | SendPollMethod
	response: MessageInterface

    constructor({type, message, response}) {
        this.type = type
        this.message = message
        this.response = response
    }
}
