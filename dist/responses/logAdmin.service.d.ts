import "dotenv/config";
import { MessageTgEvent } from "./interfaces/MessageTgEvent.interface";
export declare class LogAdminService {
    adminChannel: bigint;
    constructor(adminChannel: bigint);
    sendLogToAdmin(data: MessageTgEvent): Promise<any>;
}
