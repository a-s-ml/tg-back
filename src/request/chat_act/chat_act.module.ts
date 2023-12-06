import { Module } from '@nestjs/common';
import { ChatActService } from './chat_act.service';
import { ChatActController } from './chat_act.controller';

@Module({
  controllers: [ChatActController],
  providers: [ChatActService],
  exports: [ChatActService]
})
export class ChatActModule {}
