import { Module } from '@nestjs/common';

import { CallbackAnswerService } from './callbackAnswer.service';

import { WebhookTgModule } from '../webhook-tg.module';
import { ChatModule } from 'src/request/chat/chat.module';
import { QuestionModule } from 'src/request/question/question.module';
import { AnswerModule } from 'src/request/answer/answer.module';

@Module({
    imports: [
        WebhookTgModule,
        ChatModule,
        QuestionModule,
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
