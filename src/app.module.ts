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

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DbModule,
    AutoPostModule,
    UserModule,
    CategoryModule,
    ResponsesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    KeyboardService
  ],
})
export class AppModule { }
