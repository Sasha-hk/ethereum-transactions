import { Controller, Get, NotFoundException, Query } from '@nestjs/common';

import { BlockService } from 'src/modules/blocks/blocks.service';

@Controller('blocks')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get()
  async getBlock(@Query('tag') blockNumber: string) {
    const block = await this.blockService.getBlock(blockNumber);

    if (!block) {
      throw new NotFoundException('Block not exists');
    }

    return block;
  }
}
