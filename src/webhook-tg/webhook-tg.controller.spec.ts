import { Test, TestingModule } from '@nestjs/testing';
import { WebhookTgController } from './webhook-tg.controller';

describe('WebhookTgController', () => {
  let controller: WebhookTgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookTgController],
    }).compile();

    controller = module.get<WebhookTgController>(WebhookTgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
