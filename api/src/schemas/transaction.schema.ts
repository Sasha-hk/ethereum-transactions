import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop()
  baseFeePerGas: string;

  @Prop()
  blockHash: string;

  @Prop()
  blockNumber: string;

  @Prop()
  from: string;

  @Prop()
  gas: string;

  @Prop()
  gasPrice: string;

  @Prop()
  hash: string;

  @Prop()
  input: string;

  @Prop()
  nonce: string;

  @Prop()
  to: string;

  @Prop()
  transactionIndex: string;

  @Prop()
  value: string;

  @Prop()
  type: string;

  @Prop()
  chainId: string;

  @Prop()
  v: string;

  @Prop()
  r: string;

  @Prop()
  s: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
