import { Module } from '@nestjs/common';
import { AutoPostService } from './auto-post.service';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { QuestionModule } from 'src/request/question/question.module';
import { ChatDataModule } from 'src/request/chat_data/chat_data.module';
import { ChatCatModule } from 'src/request/chat_cat/chat_cat.module';
import { BuildQuestionModule } from 'src/constructors/questions/build-question.module';
import { ResponsesModule } from 'src/responses/responses.module';
import { ResponsesService } from 'src/responses/responses.service';

@Module({
    imports: [
        QuestionModule,
        ChatDataModule,
        ChatCatModule,
        BuildQuestionModule,
        ResponsesModule
    ],
    providers: [
        AutoPostService,
        SelectActivChatService,
        SelectQuestionService,
        ResponsesService
    ],
    exports: [
        AutoPostService,
        SelectActivChatService,
        SelectQuestionService
    ]
})
export class AutoPostModule { }
