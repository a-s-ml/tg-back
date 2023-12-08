import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatActService {

  constructor(private dbService: DbService) { }

  async create(createChatActDto: Prisma.chat_actCreateInput) {
    return await this.dbService.chat_act.create({ data: createChatActDto })
  }

  async findAll() {
    return await this.dbService.chat_act.findMany()
  }

  async findOne(id: number) {
    return await this.dbService.chat_act.findUnique({
      where: {
        id: id
      }
    })
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
