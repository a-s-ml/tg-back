import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { DbService } from 'src/db/db.service';

@Injectable()
export class AnswerService {

  constructor(private dbService: DbService) { }

  create(createAnswerDto: Prisma.answerCreateInput) {
    return this.dbService.answer.create({ data: createAnswerDto })
  }

  findAll() {
    return this.dbService.answer.findMany({})
  }

  findOne(id: number) {
    return this.dbService.answer.findUnique({
      where: {
        id,
      }
    })
  }

  findOneChat(chat_id: number, questionid: number, group_id: bigint) {
    return this.dbService.answer.findMany({
      where: {
        chat_id,
        questionid,
        group_id,
      }
    })
  }

  update(id: number, updateAnswerDto: Prisma.answerUpdateInput) {
    return this.dbService.answer.update({
      where: {
        id,
      },
      data: updateAnswerDto
    })
  }

  remove(id: number) {
    return this.dbService.answer.delete({
      where: {
        id,
      }
    })
  }
}