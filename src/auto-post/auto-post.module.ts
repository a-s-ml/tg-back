import { Module } from '@nestjs/common';
import { AutoPostService } from './auto-post.service';
import { SelectQuestion } from './selectQuestions.service';
import { SelectActivChat } from './selectActivChat.cervice';

@Module({})
export class AutoPostModule {
    providers: [
        AutoPostService,
        SelectActivChat,
        SelectQuestion
    ]
}
