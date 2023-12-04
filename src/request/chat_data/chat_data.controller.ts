import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatDataService } from './chat_data.service';
import { Prisma } from '@prisma/client';

@Controller('chat-data')
export class ChatDataController {
  constructor(private readonly chatDataService: ChatDataService) {}

  @Post()
  create(@Body() createChatDatumDto: Prisma.chat_dataCreateInput) {
    return this.chatDataService.create(createChatDatumDto);
  }

  @Get()
  findAll() {
    return this.chatDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatDatumDto: Prisma.chat_dataUpdateInput) {
    return this.chatDataService.update(+id, updateChatDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatDataService.remove(+id);
  }
}
