import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Get()
  findAll() {
    return this.timeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeService.findOne(+id);
  }

}
