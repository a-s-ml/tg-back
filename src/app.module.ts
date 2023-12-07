import { Module } from '@nestjs/common';

import { AppService } from './app.service';

import { AppController } from './app.controller';

import { DbModule } from './db/db.module';
import { ResponsesModule } from './responses/responses.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AutoPostModule } from './auto-post/auto-post.module';
import { UserModule } from './request/user/user.module';
import { CategoryModule } from './request/category/category.module';
import { WebhookTgModule } from './webhook-tg/webhook-tg.module';
import { CallbackAnswerModule } from './webhook-tg/callbackQuery/callbackAnswer.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DbModule,
    ResponsesModule,
    AutoPostModule,
    UserModule,
    CategoryModule,
    WebhookTgModule,
    CallbackAnswerModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule { }
