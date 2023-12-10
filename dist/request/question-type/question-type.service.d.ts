import { DbService } from "src/db/db.service";
export declare class QuestionTypeService {
    private dbService;
    constructor(dbService: DbService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
