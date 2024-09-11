import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as api from './api';

const port = process.env.PORT;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(+port);
  api.ping();
};

bootstrap();
