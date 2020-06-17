import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from '../../app-config';

console.log(config.backPort);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
