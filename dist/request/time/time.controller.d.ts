import { TimeService } from './time.service';
import { Prisma } from '@prisma/client';
export declare class TimeController {
    private readonly timeService;
    constructor(timeService: TimeService);
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
    findOne(id: string): Promise<{
        id: number;
        name: string;
        period: number;
    }>;
    update(id: string, updateTimeDto: Prisma.timeUpdateInput): Promise<{
        id: number;
        name: string;
        period: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        period: number;
    }>;
}
