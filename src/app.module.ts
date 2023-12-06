import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AutoPostModule } from './auto-post/auto-post.module';
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
