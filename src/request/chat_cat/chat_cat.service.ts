import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatCatService {

  constructor(private dbService: DbService) { }

  async create(createChatCatDto: Prisma.chat_catCreateManyInput) {
    return await this.dbService.chat_cat.create({ data: createChatCatDto })
  }

  async findAll() {
    await this.dbService.chat_cat.findMany({})
  }

  async findOne(id: number) {
    return await this.dbService.chat_cat.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateChatCatDto: Prisma.chat_catUpdateInput) {
    return await this.dbService.chat_cat.update({
      where: {
        id,
      },
      data: updateChatCatDto
    })
  }

  async remove(id: number) {
    return await this.dbService.chat_cat.delete({
      where: {
        id,
      }
    })
  }

  // запрещённые категорие в группе
  async forbiddenCategory(chatid: bigint) {
    return await this.dbService.chat_cat.findMany({
      select: {
        cat_id: true,
      },
      where: {
        chat_id: chatid
      }
    })
  }
}
