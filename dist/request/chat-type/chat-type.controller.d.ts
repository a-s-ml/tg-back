import { ChatTypeService } from "./chat-type.service";
export declare class ChatTypeController {
    private readonly chatTypeService;
    constructor(chatTypeService: ChatTypeService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
