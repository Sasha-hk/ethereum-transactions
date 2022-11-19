import { model, connect } from 'mongoose';
import * as axios from 'axios';
import * as fakeUa from 'fake-useragent';

import { BlockSchema } from 'src/schemas/block.schema';
import { TransactionSchema } from 'src/schemas/transaction.schema';
import { sleep } from 'src/utils/sleep';

const Block = model('User', BlockSchema);
const Transaction = model('Transaction', TransactionSchema);

const countOfInitBlocks = Number(process.env.INIT_BLOCK_COUNT);
const apikey = process.env.ETHERSCAN_API_KEY;
const headers = {
  'User-Agent': fakeUa(),
};

export async function initDB() {
  await connect(process.env.MONGODB_URL);

  // Check if transactions exists in database
  const dbTransactions = await Transaction.find({});

  if (dbTransactions.length === 0) {
    console.log('Starting to download blocks from etherscan');
    await loadBlocks({ count: 0 });
  }
}

async function loadBlocks({
  count,
  number,
}: {
  count: number;
  number?: string;
}) {
  if (count == countOfInitBlocks) {
    return;
  }

  if (count % 5 === 0) {
    await sleep(1000);
  }

  // @ts-ignore
  const block = await axios.get('https://api.etherscan.io/api', {
    params: {
      module: 'proxy',
      action: 'eth_getBlockByNumber',
      apikey,
      boolean: 'true',
      tag: number,
    },
    headers,
  });

  console.log('Save block:', block.data.result.number);

  // Save transactions to database
  Transaction.insertMany(block.data.result.transactions);

  // Save block to DB
  Block.create(block.data.result);

  // Create previous block number
  const previousBlockNumber = (
    parseInt(block.data.result.number, 16) - 1
  ).toString(16);

  // Fetch next block
  await loadBlocks({ count: count + 1, number: previousBlockNumber });
}
