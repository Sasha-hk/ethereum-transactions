import { Controller, Get, Query, Res } from '@nestjs/common';

import { TransactionsService } from 'src/modules/transactions/transactions.service';
import { GetTransactionsQueriesDto } from 'src/modules/transactions/dto/transactions.dto';
import { Response } from 'express';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async getTransactions(
    @Res() res: Response,
    @Query() queries: GetTransactionsQueriesDto,
  ) {
    const transactions = await this.transactionsService.getTransactions(
      queries,
    );

    res.json(transactions);
  }
}
