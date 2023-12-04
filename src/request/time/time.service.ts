import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class TimeService {

  constructor(private readonly dbService: DbService) { }

  async create(createTimeDto: Prisma.timeCreateInput) {
    return await this.dbService.time.create({ data: createTimeDto })
  }

  async findAll() {
    return await this.dbService.time.findMany({})
  }

  async findOne(id: number) {
    return await this.dbService.time.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateTimeDto: Prisma.timeUpdateInput) {
    return await this.dbService.time.update({
      where: {
        id,
      },
      data: updateTimeDto
    })
  }

  async remove(id: number) {
    return await this.dbService.time.delete({
      where: {
        id,
      }
    })
  }
}
