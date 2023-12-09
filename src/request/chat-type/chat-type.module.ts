import { Module } from '@nestjs/common';
import { ChatTypeService } from './chat-type.service';
import { ChatTypeController } from './chat-type.controller';

@Module({
  controllers: [ChatTypeController],
  providers: [ChatTypeService],
})
export class ChatTypeModule {}
