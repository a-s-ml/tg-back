import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class TimeService {
    private readonly dbService;
    constructor(dbService: DbService);
    create(createTimeDto: Prisma.timeCreateInput): Promise<{
        id: number;
        name: string;
        period: number;
    }>;
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
    update(id: number, updateTimeDto: Prisma.timeUpdateInput): Promise<{
        id: number;
        name: string;
        period: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        period: number;
    }>;
}
