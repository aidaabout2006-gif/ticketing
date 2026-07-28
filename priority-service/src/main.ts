import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app =
    await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
  });

  await app.listen(
    Number(process.env.PORT) || 3002,
  );

  console.log(
    `Priority Service Running on Port ${
      Number(process.env.PORT) || 3002
    }`,
  );
}

bootstrap();