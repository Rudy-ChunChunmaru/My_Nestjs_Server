import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConstants } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();

  await app.listen(appConstants.port);
  console.log(`server is running on port: ${appConstants.port}`);
}
bootstrap();
