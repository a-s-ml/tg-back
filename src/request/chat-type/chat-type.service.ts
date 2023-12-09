import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatTypeService {
  
  constructor(private dbService: DbService) { } 

  async findAll() {
    return await this.dbService.chatType.findMany()
  }

  async findOne(id: number) {
    return await this.dbService.chatType.findUnique({
      where: {
        id,
      }
    })
  }

}
