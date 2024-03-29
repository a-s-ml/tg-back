import "dotenv/config";
import { EventInterface } from "src/request/chat/models/events.interface";
export declare class LogAdminService {
    handleOrderCreatedEvent(event: EventInterface): Promise<void>;
    eventPost(event: EventInterface): Promise<void>;
    eventAnswer(event: EventInterface): Promise<void>;
}
