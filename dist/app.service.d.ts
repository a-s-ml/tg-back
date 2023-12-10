import { AutoPostService } from "./auto-post/auto-post.service";
import { ResponsesService } from "./responses/responses.service";
export declare class AppService {
    private readonly autoPostServise;
    private readonly responsesService;
    constructor(autoPostServise: AutoPostService, responsesService: ResponsesService);
    cron(): Promise<void>;
}
