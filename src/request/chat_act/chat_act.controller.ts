import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatActService } from './chat_act.service';
import { Prisma } from '@prisma/client';

@Controller('chat-act')
export class ChatActController {
  constructor(private chatActService: ChatActService) {}

  @Post()
  create(@Body() createChatActDto: Prisma.chat_actCreateInput) {
    return this.chatActService.create(createChatActDto);
  }

  @Get()
  findAll() {
    return this.chatActService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatActService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatActDto: Prisma.chat_actUpdateInput) {
    return this.chatActService.update(+id, updateChatActDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatActService.remove(+id);
  }
}
