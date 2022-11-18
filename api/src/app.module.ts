import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockModule } from 'src/modules/blocks/blocks.module';
import { TransactionsModule } from 'src/modules/transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    BlockModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
