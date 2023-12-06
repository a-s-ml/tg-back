import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class CategoryService {
    private dbService;
    constructor(dbService: DbService);
    create(createCategoryDto: Prisma.categoryCreateInput): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
    update(id: number, updateCategoryDto: Prisma.categoryUpdateInput): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
