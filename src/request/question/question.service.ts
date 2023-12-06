import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class QuestionService {

  constructor(private dbService: DbService) { }

  async create(createQuestionDto: Prisma.questionCreateInput) {
    return await this.dbService.question.create({ data: createQuestionDto })
  }

  async findAll() {
      return await this.dbService.question.findMany({})
  }

  async findOne(id: number) {
      return await this.dbService.question.findUnique({ 
        where: {
          id,
        }
      })
  }

  async findOneAnswers(id: number) {
    return await this.dbService.question.findUnique({
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

  async update(id: number, updateQuestionDto: Prisma.questionUpdateInput) {
    return await this.dbService.question.update({
      where: {
        id,
      },
      data: updateQuestionDto
    })
  }

  async remove(id: number) {
    return await this.dbService.question.delete({
      where: {
        id,
      }
    })
  }
}
