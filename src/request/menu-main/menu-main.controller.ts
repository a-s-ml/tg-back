import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuMainService } from './menu-main.service';
import { Prisma } from '@prisma/client'

@Controller('menu-main')
export class MenuMainController {
  constructor(private menuMainService: MenuMainService) {}

  @Post()
  create(@Body() createMenuMainDto: Prisma.menuMainCreateInput) {
    return this.menuMainService.create(createMenuMainDto);
  }

  @Get()
  findAll() {
    return this.menuMainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuMainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuMainDto: Prisma.menuMainUpdateInput) {
    return this.menuMainService.update(+id, updateMenuMainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuMainService.remove(+id);
  }
}
