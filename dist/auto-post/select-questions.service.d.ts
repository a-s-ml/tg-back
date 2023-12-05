import { DbService } from 'src/db/db.service';
import { ChatCatService } from 'src/request/chat_cat/chat_cat.service';
import { ChatDataService } from 'src/request/chat_data/chat_data.service';
export declare class SelectQuestionService {
    private dbService;
    private chatCatService;
    private chatDataService;
    constructor(dbService: DbService, chatCatService: ChatCatService, chatDataService: ChatDataService);
    availableQuestion(chatid: bigint): Promise<{
        id: number;
    }>;
}
