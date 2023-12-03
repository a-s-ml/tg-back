import { Test, TestingModule } from '@nestjs/testing';
import { ChatActService } from './chat_act.service';

describe('ChatActService', () => {
  let service: ChatActService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatActService],
    }).compile();

    service = module.get<ChatActService>(ChatActService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
