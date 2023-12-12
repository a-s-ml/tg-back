import { AutoPostService } from "./auto-post/auto-post.service";
export declare class AppService {
    private readonly autoPostServise;
    constructor(autoPostServise: AutoPostService);
    cron(): Promise<void>;
}
