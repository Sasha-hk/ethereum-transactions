import * as axios from 'axios';
import * as fakeUa from 'fake-useragent';

const apikey = process.env.ETHERSCAN_API_KEY;
const headers = {
  'User-Agent': fakeUa(),
};

/**
 * Get latest block number
 *
 * @returns block number
 */
export async function getBlockNumber() {
  // @ts-ignore
  return await axios.get('https://api.etherscan.io/api', {
    params: {
      module: 'proxy',
      action: 'eth_blockNumber',
      apikey,
    },
    headers,
  });
}

/**
 * Get latest block or block by number
 *
 * @param number block number
 * @returns block
 */
export async function getBlock(number?: string) {
  // @ts-ignore
  return await axios.get('https://api.etherscan.io/api', {
    params: {
      module: 'proxy',
      action: 'eth_getBlockByNumber',
      apikey,
      boolean: 'true',
      tag: number,
    },
    headers,
  });
}
