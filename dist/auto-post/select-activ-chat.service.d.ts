import { DbService } from 'src/db/db.service';
export declare class SelectActivChatService {
    private readonly dbService;
    constructor(dbService: DbService);
    activChat(): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }[]>;
}
