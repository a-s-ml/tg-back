import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatDataService {
  
  constructor(private dbService: DbService) { }
  
  async create(chatDataCreateInput: Prisma.chatDataCreateInput) {
    return await this.dbService.chatData.create({ data: chatDataCreateInput })
  }

  async findLastChat(group: bigint) {
    return await this.dbService.chatData.findMany({
      where: {
        group,
      },
      orderBy: {
        id: 'desc'
      },
      take: 1,
    })
  }

  async findAllChat(group: bigint) {
    return await this.dbService.chatData.findMany({
      select: {
        question_id: true,
      },
      where: {
        group,
      }
    })
  }

}
