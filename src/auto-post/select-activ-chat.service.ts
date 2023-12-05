import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class SelectActivChatService {

    constructor(
        private readonly dbService: DbService
        ) { }

    
    async activChat() {
        return await this.dbService.chat_act.findMany();
    }
}