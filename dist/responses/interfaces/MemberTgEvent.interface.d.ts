import { ChatMemberUpdatedInterface } from "src/interfaces/types/ChatMemberUpdated.interface";
export declare class MemberTgEvent {
    statusMember: string;
    memberData: ChatMemberUpdatedInterface;
    constructor({ statusMember, memberData }: {
        statusMember: any;
        memberData: any;
    });
}
