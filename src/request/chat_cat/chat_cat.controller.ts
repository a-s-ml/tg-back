import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatCatService } from './chat_cat.service';
import { Prisma } from '@prisma/client';

@Controller('chat-cat')
export class ChatCatController {
  constructor(private chatCatService: ChatCatService) {}

  @Post()
  create(@Body() createChatCatDto: Prisma.chat_catCreateInput) {
    return this.chatCatService.create(createChatCatDto);
  }

  @Get()
  findAll() {
    return this.chatCatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatCatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatCatDto: Prisma.chat_catUpdateInput) {
    return this.chatCatService.update(+id, updateChatCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatCatService.remove(+id);
  }
}
