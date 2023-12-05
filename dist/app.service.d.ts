import { AutoPostService } from './auto-post/auto-post.service';
import { BuildQuestionService } from './constructors/questions/build-question.service';
export declare class AppService {
    private readonly autoPostServise;
    private readonly buildQuestionService;
    constructor(autoPostServise: AutoPostService, buildQuestionService: BuildQuestionService);
    cron(): Promise<void>;
}
