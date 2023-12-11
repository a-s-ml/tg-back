import { AutoPostService } from "./auto-post.service";
export declare class AutoPostController {
    private autoPostService;
    constructor(autoPostService: AutoPostService);
    questionTypePoll(question: string, id: string, type: string): Promise<void>;
}
