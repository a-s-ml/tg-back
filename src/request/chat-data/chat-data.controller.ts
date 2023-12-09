import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatDataService } from './chat-data.service';
import { Prisma } from '@prisma/client';

@Controller('chat-data')
export class ChatDataController {

  constructor(private readonly chatDataService: ChatDataService) {}

  @Post()
  create(@Body() createChatDatumDto: Prisma.chatDataCreateInput) {
    return this.chatDataService.create(createChatDatumDto);
  }

  @Get(':group')
  findLastChat(@Param('group') group: string) {
    return this.chatDataService.findLastChat(group as unknown as bigint);
  }

  @Get(':group')
  findAllChat(@Param('group') group: string) {
    return this.chatDataService.findAllChat(group as unknown as bigint);
  }
}
