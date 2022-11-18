import { NestFactory } from '@nestjs/core';

import { initDB } from 'src/init-database';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await initDB();

  await app.listen(3000);
}

bootstrap();
