import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatDataService {

  constructor(private readonly dbService: DbService) { }

  async create(createChatDatumDto: Prisma.chat_dataCreateInput) {
    return await this.dbService.chat_data.create({ data: createChatDatumDto })
  }

  async findAll() {
    return JSON.stringify(
      await this.dbService.chat_data.findMany({}),
      (key, value) => (typeof value === 'bigint' ? value.toString() : value)
    )
  }

  async findOne(id: number) {
    return JSON.stringify(
      await this.dbService.chat_data.findUnique({
        where: {
          id: id
        }
      }),
      (key, value) => (typeof value === 'bigint' ? value.toString() : value)
    )
  }

  async update(id: number, updateChatDatumDto: Prisma.chat_dataUpdateInput) {
    return await this.dbService.chat_data.update({
      where: {
        id,
      },
      data: updateChatDatumDto
    })
  }

  async remove(id: number) {
    return await this.dbService.chat_data.delete({
      where: {
        id,
      }
    })
  }

  // опубликованные вопросы из chat_data
  async publishedQuestion(chatid: bigint) {
    return await this.dbService.chat_data.findMany({
      select: {
        question_id: true,
      },
      where: {
        group_id: chatid
      }
    })
  }
}
