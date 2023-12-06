import { Module } from '@nestjs/common';
import { ChatDataService } from './chat_data.service';
import { ChatDataController } from './chat_data.controller';

@Module({
  controllers: [ChatDataController],
  providers: [ChatDataService],
  exports: [ChatDataService]
})
export class ChatDataModule {}
