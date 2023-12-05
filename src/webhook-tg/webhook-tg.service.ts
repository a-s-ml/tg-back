import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookTgService {
    update(update: {}) {
        console.log(update)
    }
}



// fetch(`https://api.telegram.org/bot6061286439:AAHQWoJJemYa4q1XuwsnXP7DB5eXwNdYty8/sendMessage?chat_id=${UpdateDto.message.from.id}&text=${UpdateDto.message.text}`)
