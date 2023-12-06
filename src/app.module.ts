import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookTgModule } from './webhook-tg/webhook-tg.module';
import { DbModule } from './db/db.module';
import { AnswerModule } from './request/answer/answer.module';
import { ChatDataModule } from './request/chat_data/chat_data.module';
import { QuestionModule } from './request/question/question.module';
import { UserModule } from './request/user/user.module';
import { MenuMainModule } from './request/menu-main/menu-main.module';
import { ValidateModule } from './validate/validate.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ChatActModule } from './request/chat_act/chat_act.module';
import { CategoryModule } from './request/category/category.module';
import { ChatCatModule } from './request/chat_cat/chat_cat.module';
import { TimeModule } from './request/time/time.module';
import { AutoPostModule } from './auto-post/auto-post.module';
import { BuildQuestionModule } from './constructors/questions/build-question.module';
import { KeyboardService } from './constructors/keyboard/keyboard.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DbModule,
    AutoPostModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    KeyboardService
  ],
})
export class AppModule { }
