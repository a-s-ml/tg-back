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
import { AutoPostService } from './auto-post/auto-post.service';
import { AutoPostModule } from './auto-post/auto-post.module';
import { SelectQuestion } from './auto-post/select-questions.service';
import { SelectActivChat } from './auto-post/select-activ-chat.cervice';
import { BuildQuestionModule } from './constructors/questions/build-question.module';
import { InlineKeyboardService } from './constructors/keyboard/inline-keyboard.service';
import { KeyboardService } from './constructors/keyboard/keyboard.service';
import { BuildQuestionService } from './constructors/questions/build-question.service';
import { QuestionService } from './request/question/question.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    WebhookTgModule,
    UserModule,
    DbModule,
    AnswerModule,
    ChatDataModule,
    QuestionModule,
    MenuMainModule,
    ValidateModule,
    ChatActModule,
    CategoryModule,
    ChatCatModule,
    TimeModule,
    AutoPostModule,
    BuildQuestionModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AutoPostService,
    SelectActivChat,
    SelectQuestion,
    KeyboardService, 
    QuestionService, 
    BuildQuestionService, 
    InlineKeyboardService
  ],
})
export class AppModule { }
