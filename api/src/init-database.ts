import { model } from 'mongoose';

import { getBlock, getBlockNumber } from 'src/etherscan';
import { BlockSchema } from 'src/schemas/block.schema';
import { TransactionSchema } from 'src/schemas/transaction.schema';
import { sleep } from 'src/utils/sleep';

const Block = model('Block', BlockSchema);
const Transaction = model('Transaction', TransactionSchema);

const countOfInitBlocks = Number(process.env.INIT_BLOCK_COUNT);

/**
 * Init database with specified number of blocks
 */
export async function initDB() {
  // Check if transactions exists in database
  const dbTransactions = await Transaction.find({});

  if (dbTransactions.length === 0) {
    console.log('Starting to download blocks from etherscan');
    await loadBlocks({ count: 0 });
  }
}

/**
 * New blocks fetcher
 */
export async function blocksFetcher() {
  console.log('Start blocks fetching');

  let latestBlockNumber = '';
  let checkExists: any;

  while (true) {
    latestBlockNumber = (await getBlockNumber()).data.result;

    checkExists = await Block.findOne({ number: latestBlockNumber });

    if (!checkExists) {
      await fetchBlocks(latestBlockNumber);
    }

    await sleep(5000);
  }
}

/**
 * Save block
 *
 * @param block block to save
 */
async function saveBlock(block: any) {
  console.log('Save block:', block.number);

  // Save transactions to database
  Transaction.insertMany(block.transactions);

  // Save block to DB
  (await Block.create(block)).save();
}

/**
 * Load latest blocks
 *
 * @param param0 load blocks param
 */
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

  const block = await getBlock(number);

  saveBlock(block.data.result);

  // Create previous block number
  const previousBlockNumber = (
    parseInt(block.data.result.number, 16) - 1
  ).toString(16);

  // Fetch previous block
  await loadBlocks({ count: count + 1, number: previousBlockNumber });
}

/**
 * Fetch not exists in database block
 *
 * @param number bloc number
 */
async function fetchBlocks(number: string) {
  sleep(1000);

  const block = await getBlock(number);

  const checkExists = await Block.findOne({ number: block.data.result.number });

  if (checkExists) {
    return;
  }

  saveBlock(block.data.result);

  // Create previous block number
  const previousBlockNumber = (
    parseInt(block.data.result.number, 16) - 1
  ).toString(16);

  // Fetch previous block
  await fetchBlocks(previousBlockNumber);
}
