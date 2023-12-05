import { DbService } from 'src/db/db.service';
export declare class callbackQuery {
    private readonly dbService;
    constructor(dbService: DbService);
    update(update: {}): void;
}
