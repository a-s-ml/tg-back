import { Module } from '@nestjs/common';
import { BuildQuestionService } from './build-question.service';
import { QuestionService } from 'src/request/question/question.service';
import { InlineKeyboardService } from '../keyboard/inline-keyboard.service';

@Module({
  providers: [
    BuildQuestionService,
    InlineKeyboardService,
    QuestionService
  ]
})
export class BuildQuestionModule { }
