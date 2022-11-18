import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BlockModule } from 'src/modules/blocks/blocks.module';
import { TransactionsController } from 'src/modules/transactions/transactions.controller';
import { TransactionsService } from 'src/modules/transactions/transactions.service';
import { Transaction, TransactionSchema } from 'src/schemas/transaction.schema';

@Module({
  providers: [TransactionsService],
  controllers: [TransactionsController],
  imports: [
    BlockModule,
    MongooseModule.forFeature([
      {
        name: Transaction.name,
        schema: TransactionSchema,
      },
    ]),
  ],
  exports: [TransactionsService],
})
export class TransactionsModule {}
