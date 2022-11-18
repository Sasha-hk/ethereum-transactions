import * as mongoose from 'mongoose';

export const BlockSchema = new mongoose.Schema({
  baseFeePerGas: String,
  difficulty: String,
  extraData: String,
  gasLimit: String,
  gasUsed: String,
  hash: String,
  logsBloom: String,
  miner: String,
  mixHash: String,
  nonce: String,
  number: String,
  parentHash: String,
  receiptsRoot: String,
  sha3Uncles: String,
  size: String,
  stateRoot: String,
  timestamp: String,
  totalDifficulty: String,
  transactions: Array,
  transactionsRoot: String,
  uncles: Array,
});
