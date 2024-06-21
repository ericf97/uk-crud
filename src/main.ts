import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Config.port);
  console.log(`app listening on port ${Config.port}`);
}
bootstrap();
