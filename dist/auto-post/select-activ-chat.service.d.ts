import { ChatActService } from 'src/request/chat_act/chat_act.service';
import { ChatDataService } from 'src/request/chat_data/chat_data.service';
import { TimeService } from 'src/request/time/time.service';
import { UserService } from 'src/request/user/user.service';
import { ActualityDto } from './dto/actuality.dto';
export declare class SelectActivChatService {
    private readonly chatActService;
    private readonly chatDataService;
    private readonly userService;
    private readonly timeService;
    constructor(chatActService: ChatActService, chatDataService: ChatDataService, userService: UserService, timeService: TimeService);
    activChat(): Promise<ActualityDto[]>;
}
