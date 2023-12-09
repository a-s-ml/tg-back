import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { Prisma } from '@prisma/client';

@Controller('answer')
export class AnswerController {
  constructor(private answerService: AnswerService) {}

  @Post()
  create(@Body() createAnswerDto: Prisma.answerCreateInput) {
    return this.answerService.create(createAnswerDto);
  }

  @Get()
  findAll() {
    return this.answerService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswerDto: Prisma.answerUpdateInput) {
    return this.answerService.update(+id, updateAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answerService.remove(+id);
  }

  @Get('getStatChat/:id')
  getStatChat(@Param('id') id: bigint) {
    return this.answerService.getStatChat(id);
  }
}
