import { atom } from 'recoil';

export interface TransactionI {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: string;
  value: string;
  type: string;
  accessList: Array<any>;
  chainId: string;
  v: string;
  r: string;
  s: string;
}

export interface TransactionStateI {
  numberOfTransactions: number;
  latestBlockNumber: string;
  transactions: Array<TransactionI>;
}

const initialState: TransactionStateI = {
  numberOfTransactions: 0,
  latestBlockNumber: '0x0',
  transactions: [],
};

export const transactionsState = atom({
  key: 'transactionsAtom',
  default: initialState,
});
