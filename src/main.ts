import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // check env file
  let prot = '3003';
  let ip = 'localhost';
  if (process.env.PORT) prot = process.env.PORT;
  if (process.env.IP) ip = process.env.IP;

  await app.listen(prot);
}
bootstrap();
