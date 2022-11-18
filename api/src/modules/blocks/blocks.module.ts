import { Module } from '@nestjs/common';
import { BlockService } from 'src/modules/blocks/blocks.service';
import { TransactionsController } from 'src/modules/transactions/transactions.controller';

@Module({
  providers: [BlockService],
  controllers: [TransactionsController],
  imports: [],
  exports: [],
})
export class BlockModule {}
