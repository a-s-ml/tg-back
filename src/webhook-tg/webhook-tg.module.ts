import { Module } from '@nestjs/common';

import { QuestionModule } from 'src/request/question/question.module';
import { AnswerModule } from 'src/request/answer/answer.module';
import { ChatModule } from 'src/request/chat/chat.module';

import { WebhookTgController } from './webhook-tg.controller';

import { WebhookTgService } from './webhook-tg.service';
import { CallbackQueryService } from './callbackQuery.service';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';


@Module({
    imports: [
        QuestionModule,
        AnswerModule,
        ChatModule
    ],
    controllers: [
        WebhookTgController
    ],
    providers: [
        WebhookTgService,
        CallbackQueryService,
        CallbackAnswerService
    ],
    exports: [
        WebhookTgService,
        CallbackAnswerService
    ]
})
export class WebhookTgModule { }
