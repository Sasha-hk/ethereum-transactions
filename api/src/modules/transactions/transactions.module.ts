import { Module } from '@nestjs/common';

import { BlockModule } from 'src/modules/blocks/blocks.module';
import { TransactionsController } from 'src/modules/transactions/transactions.controller';
import { TransactionsService } from 'src/modules/transactions/transactions.service';

@Module({
  providers: [TransactionsService],
  controllers: [TransactionsController],
  imports: [BlockModule],
  exports: [TransactionsService],
})
export class TransactionsModule {}
