import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import moment from 'moment';
import { DbService } from 'src/db/db.service';
import { DateDto } from '../dto/date.dto';

@Injectable()
export class AnswerService {

  constructor(private dbService: DbService) { }

  async create(createAnswerDto: Prisma.answerCreateInput) {
    return await this.dbService.answer.create({ data: createAnswerDto })
  }

  async findAll() {
    return await this.dbService.answer.findMany({})
  }

  async findOne(id: number) {
    return await this.dbService.answer.findUnique({
      where: {
        id,
      }
    })
  }

  async findOneChat(chat_id: number, questionid: number, group_id: bigint) {
    return await this.dbService.answer.findMany({
      where: {
        chat_id,
        questionid,
        group_id,
      }
    })
  }

  async getStatChat(group_id: bigint) {
    const date = new Date()
    const gte = date.setFullYear(new Date().getFullYear(), new Date().getMonth(), 1)

    return await this.dbService.answer.groupBy({
      by: ['chat_id'],
      where: {
        group_id: group_id,
        dateadd: {
          gte: new Date(gte),
          lte: new Date(),
        },
      },
      _sum: {
        reward: true
      },
      _count: {
        id: true
      },
      orderBy: {
        _sum: {
          reward: 'desc'
        }
      },
      take: 15,
    })
  }

  async update(id: number, updateAnswerDto: Prisma.answerUpdateInput) {
    return await this.dbService.answer.update({
      where: {
        id,
      },
      data: updateAnswerDto
    })
  }

  async remove(id: number) {
    return await this.dbService.answer.delete({
      where: {
        id,
      }
    })
  }
}