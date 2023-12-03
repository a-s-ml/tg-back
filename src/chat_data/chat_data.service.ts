import { Injectable } from '@nestjs/common';
import { CreateChatDatumDto } from './dto/create-chat_datum.dto';
import { UpdateChatDatumDto } from './dto/update-chat_datum.dto';

@Injectable()
export class ChatDataService {
  create(createChatDatumDto: CreateChatDatumDto) {
    return 'This action adds a new chatDatum';
  }

  findAll() {
    return `This action returns all chatData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatDatum`;
  }

  update(id: number, updateChatDatumDto: UpdateChatDatumDto) {
    return `This action updates a #${id} chatDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatDatum`;
  }
}
