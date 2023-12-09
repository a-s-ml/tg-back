import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TimeService {
  
  constructor(private dbService: DbService) { } 

  async findAll() {
    return await this.dbService.time.findMany()
  }

  async findOne(id: number) {
    return await this.dbService.time.findUnique({
      where: {
        id,
      }
    })
  }

}
