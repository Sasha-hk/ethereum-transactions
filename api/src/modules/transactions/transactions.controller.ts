import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from 'src/modules/transactions/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async getTransactions() {
    return 'x';
  }
}
