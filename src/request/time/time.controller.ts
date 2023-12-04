import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeService } from './time.service';
import { Prisma } from '@prisma/client';

@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Post()
  create(@Body() createTimeDto: Prisma.timeCreateInput) {
    return this.timeService.create(createTimeDto);
  }

  @Get()
  findAll() {
    return this.timeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeDto: Prisma.timeUpdateInput) {
    return this.timeService.update(+id, updateTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeService.remove(+id);
  }
}
