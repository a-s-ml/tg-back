import { Test, TestingModule } from '@nestjs/testing';
import { ChatActController } from './chat_act.controller';
import { ChatActService } from './chat_act.service';

describe('ChatActController', () => {
  let controller: ChatActController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatActController],
      providers: [ChatActService],
    }).compile();

    controller = module.get<ChatActController>(ChatActController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
