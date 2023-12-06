import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class MenuMainService {
    private dbService;
    constructor(dbService: DbService);
    create(createMenuMainDto: Prisma.menuMainCreateInput): Promise<{
        id: number;
        name: string;
        text: string;
        sort: number;
        icon: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        text: string;
        sort: number;
        icon: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        text: string;
        sort: number;
        icon: string;
    }>;
    update(id: number, updateMenuMainDto: Prisma.menuMainUpdateInput): Promise<{
        id: number;
        name: string;
        text: string;
        sort: number;
        icon: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        text: string;
        sort: number;
        icon: string;
    }>;
}
