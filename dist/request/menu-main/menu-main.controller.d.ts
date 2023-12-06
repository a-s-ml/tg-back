import { MenuMainService } from './menu-main.service';
import { Prisma } from '@prisma/client';
export declare class MenuMainController {
    private menuMainService;
    constructor(menuMainService: MenuMainService);
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
    findOne(id: string): Promise<{
        id: number;
        name: string;
        text: string;
        sort: number;
        icon: string;
    }>;
    update(id: string, updateMenuMainDto: Prisma.menuMainUpdateInput): Promise<{
        id: number;
        name: string;
        text: string;
        sort: number;
        icon: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        text: string;
        sort: number;
        icon: string;
    }>;
}
