import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT || 3004);

  console.log(
    `Category  Service Running on Port ${process.env.PORT || 3004}`,
  );
}

bootstrap();