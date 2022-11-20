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
    const conditionsList = {
      from: query.address,
      to: query.address,
      hash: query.transactionId,
      blockNumber: query.blockNumber,
    };

    const conditions: Array<any> = [];
    Object.keys(conditionsList).forEach((key) => {
      if (conditionsList[key]) {
        const r = {};
        r[key] = conditionsList[key];

        conditions.push(r);
      }
    }, {});

    const transactions = await this.transactionModel
      .find(
        conditions.length
          ? {
              $or: conditions,
            }
          : {},
      )
      .skip(query.skip || 0)
      .limit(query.limit || 14)
      .sort({
        name: 'asc',
      });

    const numberOfTransactions = await this.transactionModel.count({});

    return {
      transactions,
      numberOfTransactions,
    };
  }
}
