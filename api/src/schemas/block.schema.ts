import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlockDocument = HydratedDocument<Block>;

@Schema()
export class Block {
  @Prop()
  baseFeePerGas: string;

  @Prop()
  difficulty: string;

  @Prop()
  extraData: string;

  @Prop()
  gasLimit: string;

  @Prop()
  gasUsed: string;

  @Prop()
  hash: string;

  @Prop()
  logsBloom: string;

  @Prop()
  miner: string;

  @Prop()
  mixHash: string;

  @Prop()
  nonce: string;

  @Prop()
  number: string;

  @Prop()
  parentHash: string;

  @Prop()
  receiptsRoot: string;

  @Prop()
  sha3Uncles: string;

  @Prop()
  size: string;

  @Prop()
  stateRoot: string;

  @Prop()
  timestamp: string;

  @Prop()
  totalDifficulty: string;

  // @Prop()
  // transactions: Array<any>;

  @Prop()
  transactionsRoot: string;

  @Prop()
  uncles: Array<any>;
}

export const BlockSchema = SchemaFactory.createForClass(Block);
