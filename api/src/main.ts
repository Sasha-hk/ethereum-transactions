import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { connect } from 'mongoose';

import { blocksFetcher, initDB } from 'src/init-database';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.API_PORT || 3000;

  const app = await NestFactory.create(AppModule);

  // Connect to database
  await connect(process.env.MONGODB_URL);

  // Initialize blocks
  await initDB();

  // Blocks fetcher
  blocksFetcher();

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors();
  app.use(cookieParser());

  await app.listen(PORT);
}

bootstrap();
