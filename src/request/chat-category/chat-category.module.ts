import { Module } from '@nestjs/common';
import { ChatCategoryService } from './chat-category.service';
import { ChatCategoryController } from './chat-category.controller';

@Module({
  controllers: [ChatCategoryController],
  providers: [ChatCategoryService],
  exports: [ChatCategoryService]
})
export class ChatCategoryModule {}
