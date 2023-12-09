import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatActiveService {
  
  constructor(private dbService: DbService) { } 

  async create(chatActiveCreateInput: Prisma.chatActiveCreateInput) {
    return await this.dbService.chatActive.create({ data: chatActiveCreateInput })
  }

  async findAll() {
    return await this.dbService.chatActive.findMany()
  }

  async findOne(chat: bigint) {
    return await this.dbService.chatActive.findUnique({
      where: {
        chat,
      }
    })
  }

  async remove(chat: bigint) {
    return await this.dbService.chatActive.delete({
      where: {
        chat,
      }
    })
  }
}
