import { Injectable } from "@nestjs/common"
import { DbService } from "src/db/db.service"

@Injectable()
export class QuestionTypeService {
	constructor(private dbService: DbService) {}

	async findAll() {
		return await this.dbService.questionType.findMany()
	}

	async findOne(id: number) {
		return await this.dbService.questionType.findUnique({
			where: {
				id
			}
		})
	}
}
