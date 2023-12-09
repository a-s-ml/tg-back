import { TimeService } from './time.service';
export declare class TimeController {
    private readonly timeService;
    constructor(timeService: TimeService);
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
}
