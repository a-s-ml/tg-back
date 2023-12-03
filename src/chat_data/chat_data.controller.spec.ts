import { Test, TestingModule } from '@nestjs/testing';
import { ChatDataController } from './chat_data.controller';
import { ChatDataService } from './chat_data.service';

describe('ChatDataController', () => {
  let controller: ChatDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatDataController],
      providers: [ChatDataService],
    }).compile();

    controller = module.get<ChatDataController>(ChatDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
