import { Module } from '@nestjs/common';
import { ChatCatService } from './chat_cat.service';
import { ChatCatController } from './chat_cat.controller';

@Module({
  controllers: [ChatCatController],
  providers: [ChatCatService],
  exports: [ChatCatService]
})
export class ChatCatModule {}
