import { DbService } from "src/db/db.service";
import { ChatCategoryService } from "src/request/chat-category/chat-category.service";
import { ChatDataService } from "src/request/chat-data/chat-data.service";
export declare class SelectQuestionService {
    private dbService;
    private chatCategoryService;
    private chatDataService;
    constructor(dbService: DbService, chatCategoryService: ChatCategoryService, chatDataService: ChatDataService);
    availableQuestion(chatid: bigint): Promise<{
        id: number;
    }>;
}
