import { Module } from '@nestjs/common';
import { BuildQuestionService } from './questions/build-question.service';
import { InlineKeyboardService } from './keyboard/build-keyboard.service';
import { QuestionModule } from 'src/request/question/question.module';

@Module({
  imports: [
    QuestionModule
  ],
  providers: [
    BuildQuestionService,
    InlineKeyboardService
  ],
  exports: [
    BuildQuestionService,
    InlineKeyboardService
  ]
})
export class ConstructorsModule { }
