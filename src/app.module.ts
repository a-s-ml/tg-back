import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AutoPostModule } from './auto-post/auto-post.module';
import { KeyboardService } from './constructors/keyboard/keyboard.service';
import { UserModule } from './request/user/user.module';
import { CategoryModule } from './request/category/category.module';
import { ResponsesModule } from './responses/responses.module';
import { WebhookTgModule } from './webhook-tg/webhook-tg.module';
import { CallbackAnswerModule } from './webhook-tg/callbackQuery/callbackAnswer.module';
import { UserService } from './request/user/user.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DbModule,
    AutoPostModule,
    UserModule,
    CategoryModule,
    ResponsesModule,
    WebhookTgModule,
    CallbackAnswerModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule { }
