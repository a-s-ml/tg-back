import { Module } from '@nestjs/common';
import { CallbackAnswerService } from './callbackAnswer.service';
import { WebhookTgModule } from '../webhook-tg.module';
import { QuestionService } from 'src/request/question/question.service';
import { AnswerService } from 'src/request/answer/answer.service';
import { ResponsesService } from 'src/responses/responses.service';

@Module({
    imports: [WebhookTgModule
    ],
    providers: [
        CallbackAnswerService,
        QuestionService,
        AnswerService,
        ResponsesService
    ]
})
export class CallbackAnswerModule { }
