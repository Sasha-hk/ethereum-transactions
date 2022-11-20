import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as axios from 'axios';
import * as fakeUa from 'fake-useragent';
import { Model } from 'mongoose';

import { BlockModule } from 'src/modules/blocks/blocks.module';
import { Block } from 'src/schemas/block.schema';
import { sleep } from 'src/utils/sleep';

/**
 * Fake User-Agent
 */
const headers = {
  'User-Agent': fakeUa(),
};

/**
 * Block service service
 */
@Injectable()
export class BlockService {
  private latestBlockNumber: string;

  constructor(
    @InjectModel(Block.name)
    private blockModel: Model<BlockModule>,
  ) {
    this.latestBlockNumberFetcher();
  }

  /**
   * Asynchronously fetch latest block number
   */
  async latestBlockNumberFetcher() {
    while (true) {
      // @ts-ignore
      const block = await axios.get('https://api.etherscan.io/api', {
        params: {
          module: 'proxy',
          action: 'eth_blockNumber',
          apikey: process.env.ETHERSCAN_API_KEY,
          boolean: 'true',
        },
        headers,
      });

      this.latestBlockNumber = block.data.result;

      await sleep(5000);
    }
  }

  /**
   * Get latest block number
   *
   * @returns latest block number
   */
  getLatestBlockNumber() {
    return this.latestBlockNumber;
  }

  /**
   * Get latest block or block by number
   *
   * @param blockNumber block number
   * @returns block
   */
  async getBlock(blockNumber?: string) {
    const conditions: Record<string, any> = {};

    if (blockNumber) {
      conditions.number = blockNumber;
    } else {
      conditions.number = this.getLatestBlockNumber();
    }

    return await this.blockModel.findOne(conditions);
  }
}
