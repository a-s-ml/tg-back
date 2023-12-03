import { Test, TestingModule } from '@nestjs/testing';
import { MenuMainController } from './menu-main.controller';
import { MenuMainService } from './menu-main.service';

describe('MenuMainController', () => {
  let controller: MenuMainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuMainController],
      providers: [MenuMainService],
    }).compile();

    controller = module.get<MenuMainController>(MenuMainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
