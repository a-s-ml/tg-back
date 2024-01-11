import { Injectable } from "@nestjs/common"
import { DbService } from "src/db/db.service"

@Injectable()
export class QuestionTypeService {
	constructor(private dbService: DbService) {}

	async findAll() {
		return await this.dbService.questionType.findMany({
			orderBy: {
				id: "asc"
			}
		})
	}

	async findByName(name: string) {
		return await this.dbService.questionType.findUnique({
			where: {
				name
			}
		})
	}

	async findOne(id: number) {
		return await this.dbService.questionType.findUnique({
			where: {
				id
			}
		})
	}
}
