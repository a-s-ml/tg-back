import { Module } from '@nestjs/common';

import { CallbackAnswerService } from './callbackAnswer.service';

import { WebhookTgModule } from '../webhook-tg.module';
import { UserModule } from 'src/request/user/user.module';
import { QuestionModule } from 'src/request/question/question.module';
import { AnswerModule } from 'src/request/answer/answer.module';

@Module({
    imports: [
        WebhookTgModule,
        UserModule,
        QuestionModule,
        UserModule,
        AnswerModule
    ],
    providers: [
        CallbackAnswerService
    ],
    exports: [
        CallbackAnswerService
    ]
})
export class CallbackAnswerModule { }
