import { Module } from '@nestjs/common';
import { CallbackAnswerService } from './callbackAnswer.service';
import { WebhookTgModule } from '../webhook-tg.module';
import { QuestionService } from 'src/request/question/question.service';
import { AnswerService } from 'src/request/answer/answer.service';
import { ResponsesService } from 'src/responses/responses.service';
import { UserModule } from 'src/request/user/user.module';
import { UserService } from 'src/request/user/user.service';

@Module({
    imports: [
        WebhookTgModule,
        UserModule
    ],
    providers: [
        CallbackAnswerService,
        QuestionService,
        AnswerService,
        ResponsesService,
        UserService
    ]
})
export class CallbackAnswerModule { }
