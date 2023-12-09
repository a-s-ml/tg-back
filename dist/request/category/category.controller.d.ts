import { CategoryService } from './category.service';
import { Prisma } from '@prisma/client';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: Prisma.categoryCreateInput): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
