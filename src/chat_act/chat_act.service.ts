import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatActService {

  constructor(private readonly dbService: DbService) { }

  async create(createChatActDto: Prisma.chat_actCreateInput) {
    return await this.dbService.chat_act.create({ data: createChatActDto })
  }

  async findAll() {
    return JSON.stringify(
      await this.dbService.chat_act.findMany({}),
      (key, value) => (typeof value === 'bigint' ? value.toString() : value)
    )
  }

  async findOne(id: number) {
    return  JSON.stringify(
      await this.dbService.chat_act.findUnique({
        where: {
          id: id
        }
      }),
      (key, value) => (typeof value === 'bigint' ? value.toString() : value)
    )
  }

  async update(id: number, updateChatActDto: Prisma.chat_actUpdateInput) {
    return await this.dbService.chat_act.update({
      where: {
        id,
      },
      data: updateChatActDto
    })
  }

  async remove(id: number) {
    return await this.dbService.chat_act.delete({
      where: {
        id,
      }
    })
  }
}
