import { Module } from '@nestjs/common';
import { MenuMainService } from './menu-main.service';
import { MenuMainController } from './menu-main.controller';

@Module({
  controllers: [MenuMainController],
  providers: [MenuMainService],
  exports: [MenuMainService]
})
export class MenuMainModule {}
