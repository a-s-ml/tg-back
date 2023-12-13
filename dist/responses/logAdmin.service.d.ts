import "dotenv/config";
import { MessageTgEvent } from "./interfaces/MessageTgEvent.interface";
export declare class LogAdminService {
    adminChannel: bigint;
    constructor(adminChannel: bigint);
    sendLogToAdminText(text: string): Promise<void>;
    sendLogToAdminText2(text: string): Promise<void>;
    sendLogToAdmin(data: MessageTgEvent): Promise<void>;
}
