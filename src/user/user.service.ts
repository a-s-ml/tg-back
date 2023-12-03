import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {

  constructor(private readonly dbService: DbService) { }

  async create(createUserDto: Prisma.userCreateInput) {
    return this.dbService.user.create({ data: createUserDto })
  }

  async findAll() {
    return JSON.stringify(
      this.dbService.user.findMany({}),
      (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )
  }

  async findOne(id: number) {
    return JSON.stringify(this.dbService.user.findUnique({
      where: {
        id,
      }
    }),
    (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
  )
}

  async update(id: number, updateUserDto: Prisma.userUpdateInput) {
    return this.dbService.user.update({
      where: {
        id,
      },
      data: updateUserDto
    })
  }

  async remove(id: number) {
    return this.dbService.user.delete({
      where: {
        id,
      }
    })
  }
}
