import { DbService } from 'src/db/db.service';
export declare class SelectActivChat {
    private readonly dbService;
    constructor(dbService: DbService);
    activChat(): Promise<{
        id: number;
        chat: bigint;
        res: number;
        dateadd: Date;
    }[]>;
}
