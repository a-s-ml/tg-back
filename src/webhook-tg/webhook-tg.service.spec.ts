import { Test, TestingModule } from '@nestjs/testing';
import { WebhookTgService } from './webhook-tg.service';

describe('WebhookTgService', () => {
  let service: WebhookTgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhookTgService],
    }).compile();

    service = module.get<WebhookTgService>(WebhookTgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
