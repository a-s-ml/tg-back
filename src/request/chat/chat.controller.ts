import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Prisma } from '@prisma/client';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(@Body() createChatDto: Prisma.chatCreateInput) {
    return this.chatService.create(createChatDto);
  }

  @Patch(':chat')
  update(@Param('chat') chat: string, @Body() updateChatDto: Prisma.chatUpdateInput) {
    return this.chatService.update(chat as unknown as bigint, updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
}
