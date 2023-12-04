import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class MenuMainService {

  constructor(private readonly dbService: DbService) { }

  async create(createMenuMainDto: Prisma.menuMainCreateInput) {
    return this.dbService.menuMain.create({ data: createMenuMainDto })
  }

  async findAll() {
    return this.dbService.menuMain.findMany({})
  }

  async findOne(id: number) {
    return this.dbService.menuMain.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateMenuMainDto: Prisma.menuMainUpdateInput) {
    return this.dbService.menuMain.update({
      where: {
        id,
      },
      data: updateMenuMainDto
    })
  }

  async remove(id: number) {
    return this.dbService.menuMain.delete({
      where: {
        id,
      }
    })
  }
}
