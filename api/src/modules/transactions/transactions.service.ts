import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GetTransactionsQueriesDto } from 'src/modules/transactions/dto/transactions.dto';
import { TransactionsModule } from 'src/modules/transactions/transactions.module';
import { Transaction } from 'src/schemas/transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionsModule>,
  ) {}

  async getTransactions(
    query: Exclude<GetTransactionsQueriesDto, 'limit' | 'skip'>,
  ) {
    const conditions = Object.keys({
      from: query.from,
      to: query.to,
      transactionId: query.transactionId,
      blockNumber: query.blockNumber,
    }).reduce((result, key) => {
      if (query[key]) {
        result[key] = query[key];
      }
      return result;
    }, {});

    console.log(conditions);

    const transactions = await this.transactionModel
      .find(conditions)
      .skip(query.skip || 0)
      .limit(query.limit || 14)
      .sort({
        name: 'asc',
      });

    return transactions;
  }
}
