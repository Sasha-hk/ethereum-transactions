import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetTransactionsQueriesDto {
  @IsString()
  @IsOptional()
  from: string;

  @IsString()
  @IsOptional()
  to: string;

  @IsString()
  @IsOptional()
  transactionId: string;

  @IsString()
  @IsOptional()
  blockNumber: string;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  skip: number;

  @Max(100)
  @Min(1)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit: number;
}
