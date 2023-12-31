import { Injectable } from "@nestjs/common"
import { Cron, CronExpression } from "@nestjs/schedule"
import { AutoPostService } from "./auto-post/auto-post.service"

@Injectable()
export class AppService {
	constructor(
		private readonly autoPostServise: AutoPostService
	) {}

	@Cron(CronExpression.EVERY_10_SECONDS)
	async cron() {
		// const t0 = performance.now();
		await this.autoPostServise.publicationInActiveGroup()
		// const t1 = performance.now();
		// const t = t1 - t0
		// await this.responsesService.sendLogToAdmin(`Cron question = ${t} milliseconds`)
		// const tt0 = performance.now();
		// const stat = await this.autoPostServise.publicationInActiveGroupStat();
		// const tt1 = performance.now();
		// const tt = tt1 - tt0
		// await this.responsesService.sendLogToAdmin(`Cron stat = ${tt} milliseconds`)
	}
}
