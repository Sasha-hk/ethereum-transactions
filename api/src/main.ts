import { NestFactory } from '@nestjs/core';

import { initBlocks } from 'src/init-blocks';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(2);

  await initBlocks();

  console.log(3);

  await app.listen(3000);
}

bootstrap();
