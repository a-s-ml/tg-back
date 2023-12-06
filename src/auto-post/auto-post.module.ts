import { Module } from '@nestjs/common';
import { AutoPostService } from './auto-post.service';
import { SelectQuestionService } from './select-questions.service';
import { SelectActivChatService } from './select-activ-chat.service';
import { BuildQuestionService } from 'src/constructors/questions/build-question.service';
import { ChatCatService } from 'src/request/chat_cat/chat_cat.service';
import { DbService } from 'src/db/db.service';
import { ChatDataService } from 'src/request/chat_data/chat_data.service';
import { QuestionService } from 'src/request/question/question.service';
import { InlineKeyboardService } from 'src/constructors/keyboard/inline-keyboard.service';
import { QuestionModule } from 'src/request/question/question.module';
import { ChatDataModule } from 'src/request/chat_data/chat_data.module';
import { ChatCatModule } from 'src/request/chat_cat/chat_cat.module';
import { BuildQuestionModule } from 'src/constructors/questions/build-question.module';

@Module({
    imports: [
        QuestionModule,
        ChatDataModule,
        ChatCatModule,
        BuildQuestionModule
    ],
    providers: [
        AutoPostService,
        SelectActivChatService,
        SelectQuestionService
    ],
    exports: [
        AutoPostService,
        SelectActivChatService,
        SelectQuestionService
    ]
})
export class AutoPostModule { }
