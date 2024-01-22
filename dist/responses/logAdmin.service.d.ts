import "dotenv/config";
import { EventInterface } from "src/request/chat/models/events.interface";
export declare class LogAdminService {
    sendLogToAdminGroupErrorResponse(text: string): Promise<void>;
    sendLogToAdminGroupErrorResponse2(text: string): Promise<void>;
    handleOrderCreatedEvent(event: EventInterface): Promise<void>;
}
