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
            let lastPost = await this.chatDataService.getLastPost(chatact[key].chat)
            let chat = await this.userService.findByChatId(chatact[key].chat)
            let period = await this.timeService.findOne(chat.question_time)
            let currentTime = Math.round(Math.floor(new Date().getTime())/1000)
            let lastPostTime = lastPost[0].date
            let timeToLast = currentTime - lastPostTime
            let periodTime = period.period
            if(timeToLast > periodTime) {
                actiality.push(chatact[key])
            }
        }
        console.log(actiality)
        return actiality
    }

}