import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockController } from 'src/modules/blocks/blocks.controller';

import { BlockService } from 'src/modules/blocks/blocks.service';
import { Block, BlockSchema } from 'src/schemas/block.schema';

@Module({
  providers: [BlockService],
  controllers: [BlockController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Block.name,
        schema: BlockSchema,
      },
    ]),
  ],
  exports: [BlockService],
})
export class BlockModule {}
