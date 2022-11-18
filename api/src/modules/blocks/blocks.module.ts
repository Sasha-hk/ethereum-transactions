import { Module } from '@nestjs/common';

import { BlockService } from 'src/modules/blocks/blocks.service';

@Module({
  providers: [BlockService],
  controllers: [],
  imports: [],
  exports: [BlockService],
})
export class BlockModule {}
