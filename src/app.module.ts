import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookTgModule } from './webhook-tg/webhook-tg.module';
import { DbModule } from './db/db.module';
import { AnswerModule } from './answer/answer.module';
import { ChatDataModule } from './chat_data/chat_data.module';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { MenuMainModule } from './menu-main/menu-main.module';
import { ValidateModule } from './validate/validate.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [WebhookTgModule, UserModule, DbModule, AnswerModule, ChatDataModule, QuestionModule, MenuMainModule, ValidateModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
