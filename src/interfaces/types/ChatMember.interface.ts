import { ChatMemberTypesInterface } from "./ChatMemberTypes.interface"
import { UserInterface } from "./User.interface"

export class ChatMemberInterface {
	user: UserInterface
	status: string //ChatMemberTypesInterface
}
