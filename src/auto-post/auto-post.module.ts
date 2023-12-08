import { Module } from '@nestjs/common';

import { AutoPostService } from './auto-post.service';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';

import { QuestionModule } from 'src/request/question/question.module';
import { ChatDataModule } from 'src/request/chat_data/chat_data.module';
import { ChatCatModule } from 'src/request/chat_cat/chat_cat.module';
import { ConstructorsModule } from 'src/constructors/constructors.module';
import { UserModule } from 'src/request/user/user.module';
import { ChatActService } from 'src/request/chat_act/chat_act.service';
import { ChatDataService } from 'src/request/chat_data/chat_data.service';
import { TimeService } from 'src/request/time/time.service';
import { UserService } from 'src/request/user/user.service';

@Module({
    imports: [
        QuestionModule,
        ChatDataModule,
        ChatCatModule,
        ConstructorsModule,
        UserModule
    ],
    providers: [
        AutoPostService,
        SelectActivChatService,
        SelectQuestionService,
        ChatActService,
        ChatDataService,
        UserService,
        TimeService
    ],
    exports: [
        AutoPostService,
        SelectActivChatService,
        SelectQuestionService
    ]
})
export class AutoPostModule { }
