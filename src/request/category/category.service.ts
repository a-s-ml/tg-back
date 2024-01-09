import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { DbService } from "src/db/db.service"

@Injectable()
export class CategoryService {
	constructor(private dbService: DbService) {}

	async create(createCategoryDto: Prisma.categoryCreateInput) {
		return await this.dbService.category.create({ data: createCategoryDto })
	}

	async findAll() {
		return await this.dbService.category.findMany({})
	}

	async countAll() {
		return await this.dbService.category.count({})
	}

	async findOne(id: number) {
		return await this.dbService.category.findUnique({
			where: {
				id: id
			}
		})
	}
}
