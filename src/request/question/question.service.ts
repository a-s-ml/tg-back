import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class QuestionService {

  constructor(private readonly dbService: DbService) { }

  create(createQuestionDto: Prisma.questionCreateInput) {
    return this.dbService.question.create({ data: createQuestionDto })
  }

  findAll() {
    return this.dbService.question.findMany({})
  }

  findOne(id: number) {
    return this.dbService.question.findUnique({
      where: {
        id,
      }
    })
  }

  findOneAnswers(id: number) {
    return this.dbService.question.findUnique({
      select: {
        answer1: true,
        answer2: true,
        answer3: true,
        answer4: true,
    },
      where: {
        id,
      }
    })
  }

  update(id: number, updateQuestionDto: Prisma.questionUpdateInput) {
    return this.dbService.question.update({
      where: {
        id,
      },
      data: updateQuestionDto
    })
  }

  remove(id: number) {
    return this.dbService.question.delete({
      where: {
        id,
      }
    })
  }
}
