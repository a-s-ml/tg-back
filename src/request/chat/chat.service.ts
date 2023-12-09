import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { ResponsesService } from 'src/responses/responses.service';
import { ChatDto } from 'src/webhook-tg/dto/chat.dto';
import { UserDto } from 'src/webhook-tg/dto/user.dto';

@Injectable()
export class ChatService {
  
  constructor(
    private dbService: DbService,
    private responsesService: ResponsesService
  ) { }

  async create(createChatDto: Prisma.chatCreateInput) {
    return this.dbService.chat.create({ data: createChatDto })
  }

  async findByChatId(chat: bigint) {
    return await this.dbService.chat.findUnique({
      where: {
        chat,
      }
    })
  }

  async update(chat: bigint, updateChatDto: Prisma.chatUpdateInput) {
    await this.dbService.chat.update({
      where: {
        chat,
      },
      data: updateChatDto
    })
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }

  async verificationExistence(from: UserDto) {
    const checkUser = await this.findByChatId(from.id)
    if (!checkUser) {
      await this.create({ chat: from.id, bot: from.is_bot ? 1 : 0 })
      await this.responsesService.sendLogToAdmin(`new_user:\n${from.id}\n${from.first_name} ${from.username}`) //лог
    }
  }

  async verificationExistenceChat(from: ChatDto) {
    const checkChat = await this.findByChatId(from.id)
    if (!checkChat) {
      await this.create({ chat: from.id, bot: from.type ? 1 : 0 })
      await this.responsesService.sendLogToAdmin(`new_chat:\n${from.id}\n${from.type}`) //лог
    }
  }
}
