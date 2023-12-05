import { Module } from '@nestjs/common';
import { WebhookTgController } from './webhook-tg.controller';
import { WebhookTgService } from './webhook-tg.service';
import { CallbackQueryService } from './callbackQuery.service';
import { CallbackAnswerService } from './callbackQuery/callbackAnswer.service';
import { AnswerService } from 'src/request/answer/answer.service';
import { QuestionService } from 'src/request/question/question.service';

@Module({
    controllers: [WebhookTgController],
    providers: [
        WebhookTgService, 
        CallbackQueryService,
        CallbackAnswerService,
        AnswerService,
        QuestionService
    ]
})
export class WebhookTgModule {}
