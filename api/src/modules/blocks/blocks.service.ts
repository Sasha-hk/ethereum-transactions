import { Injectable } from '@nestjs/common';
import * as axios from 'axios';
import * as fakeUa from 'fake-useragent';

import { sleep } from 'src/utils/sleep';

const headers = {
  'User-Agent': fakeUa(),
};

@Injectable()
export class BlockService {
  private latestBlockNumber: string;

  constructor() {
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

  getLatestBlockNumber() {
    return this.latestBlockNumber;
  }
}
