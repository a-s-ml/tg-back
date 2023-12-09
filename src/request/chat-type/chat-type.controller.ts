import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatTypeService } from './chat-type.service';

@Controller('chat-type')
export class ChatTypeController {
  
  constructor(private readonly chatTypeService: ChatTypeService) {}

  @Get()
  findAll() {
    return this.chatTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatTypeService.findOne(+id);
  }

}
