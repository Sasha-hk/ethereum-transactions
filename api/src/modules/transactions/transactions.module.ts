import { Module } from '@nestjs/common';
import { TransactionsController } from 'src/modules/transactions/transactions.controller';
import { TransactionsService } from 'src/modules/transactions/transactions.service';

@Module({
  providers: [TransactionsService],
  controllers: [TransactionsController],
  imports: [],
  exports: [],
})
export class TransactionsModule {}
