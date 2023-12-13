import { ChatMemberUpdatedInterface } from "src/interfaces/types/ChatMemberUpdated.interface"

export class MemberTgEvent {
	statusMember: string
	memberData: ChatMemberUpdatedInterface

    constructor({statusMember, memberData}) {
        this.statusMember = statusMember
        this.memberData = memberData
    }
}
