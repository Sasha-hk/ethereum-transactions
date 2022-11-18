import { model, connect } from 'mongoose';

import { BlockSchema } from 'src/schemas/block.schema';

export async function initBlocks() {
  const Block = model('User', BlockSchema);

  await connect(process.env.MONGODB_URL);

  const newBlock = await Block.create({});

  newBlock.save();
}
