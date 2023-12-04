import { DbService } from 'src/db/db.service';
export declare class SelectQuestion {
    private readonly dbService;
    constructor(dbService: DbService);
    publishedQuestion(chatid: bigint): Promise<any[]>;
    forbiddenCategory(chatid: bigint): Promise<any[]>;
    countAvailableQuestion(chatid: bigint): Promise<number>;
    availableQuestion(chatid: bigint): Promise<{
        id: number;
    }[]>;
}
