import { Module } from '@nestjs/common';
import { BuildQuestionService } from './questions/build-question.service';
import { BuildKeyboardService } from './keyboard/build-keyboard.service';
import { BuildStatListService } from './statList/build-statList.service';
import { QuestionModule } from 'src/request/question/question.module';
import { AnswerService } from 'src/request/answer/answer.service';

@Module({
  imports: [
    QuestionModule
  ],
  providers: [
    BuildQuestionService,
    BuildKeyboardService,
    BuildStatListService,
    AnswerService
  ],
  exports: [
    BuildQuestionService,
    BuildStatListService,
    BuildKeyboardService
  ]
})
export class ConstructorsModule { }
