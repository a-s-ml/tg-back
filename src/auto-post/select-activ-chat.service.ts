import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ChatActService } from 'src/request/chat_act/chat_act.service';
import { ChatDataService } from 'src/request/chat_data/chat_data.service';
import { TimeService } from 'src/request/time/time.service';
import { UserService } from 'src/request/user/user.service';
import { ActualityDto } from './dto/actuality.dto';

@Injectable()
export class SelectActivChatService {

    constructor(
        private readonly chatActService: ChatActService,
        private readonly chatDataService: ChatDataService,
        private readonly userService: UserService,
        private readonly timeService: TimeService
    ) { }

    async activChat() {
        const chatact = await this.chatActService.findAll()
        let actiality: Array<ActualityDto> =[]
        for (var key in chatact) {
            const lastPost = await this.chatDataService.getLastPost(chatact[key].chat)
            const chat = await this.userService.findByChatId(chatact[key].chat)
            const period = await this.timeService.findOne(chat.question_time)
            const timeToLast = Math.floor(new Date().getTime()) - (lastPost[0].date*1000)
            if(timeToLast <= period.period) {
                actiality.push(chatact[key])
            }
        }
        return actiality
    }

}