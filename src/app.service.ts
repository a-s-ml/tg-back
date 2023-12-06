import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AutoPostService } from './auto-post/auto-post.service'
import { BuildQuestionService } from './constructors/questions/build-question.service';

@Injectable()
export class AppService {

  constructor(
    private readonly autoPostServise: AutoPostService
  ) { }

  @Cron(CronExpression.EVERY_DAY_AT_9PM)
  async cron() {
    const tt0 = performance.now();
    await this.autoPostServise.publicationInActiveGroup();
    const tt1 = performance.now();
    console.log(tt1 - tt0, 'milliseconds ALL');
  }
}
