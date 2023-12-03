import { Test, TestingModule } from '@nestjs/testing';
import { MenuMainService } from './menu-main.service';

describe('MenuMainService', () => {
  let service: MenuMainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuMainService],
    }).compile();

    service = module.get<MenuMainService>(MenuMainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
