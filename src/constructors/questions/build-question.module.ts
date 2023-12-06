import { Module } from '@nestjs/common';
import { BuildQuestionService } from './build-question.service';
import { QuestionService } from 'src/request/question/question.service';
import { InlineKeyboardService } from '../keyboard/inline-keyboard.service';
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
export class BuildQuestionModule { }
