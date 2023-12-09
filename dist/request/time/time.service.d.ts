import { DbService } from 'src/db/db.service';
export declare class TimeService {
    private dbService;
    constructor(dbService: DbService);
    findAll(): Promise<{
        id: number;
        name: string;
        period: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        period: number;
    }>;
}
