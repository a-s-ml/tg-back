import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class CategoryService {
  
  constructor(private readonly dbService: DbService) { }

  async create(createCategoryDto: Prisma.categoryCreateInput) {
    return await this.dbService.category.create({ data: createCategoryDto })
  }

  async findAll() {
    return await this.dbService.category.findMany({})
  }

  async findOne(id: number) {
    return await this.dbService.category.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateCategoryDto: Prisma.categoryUpdateInput) {
    return await this.dbService.category.update({
      where: {
        id,
      },
      data: updateCategoryDto
    })
  }

  async remove(id: number) {
    return await this.dbService.category.delete({
      where: {
        id,
      }
    })
  }
}
