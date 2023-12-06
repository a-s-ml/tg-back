import { Module } from '@nestjs/common';
import { WebhookTgController } from './webhook-tg.controller';
import { WebhookTgService } from './webhook-tg.service';
import { CallbackQueryService } from './callbackQuery.service';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';
import { QuestionModule } from 'src/request/question/question.module';
import { AnswerModule } from 'src/request/answer/answer.module';
import { ResponsesService } from 'src/responses/responses.service';

@Module({
    imports: [
        QuestionModule,
        AnswerModule
    ],
    controllers: [WebhookTgController],
    providers: [
        WebhookTgService, 
        CallbackQueryService,
        CallbackAnswerService,
        ResponsesService
    ]
})
export class WebhookTgModule {}
