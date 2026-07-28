//ابزار اصلی خود nest js
import { NestFactory } from '@nestjs/core';
//ماژول ریشه یا اصلی 
import { AppModule } from './app.module';
//هنگام اجرای برنامه فراخوانی میشود 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//متد cors
  app.enableCors();

  await app.listen(process.env.PORT || 3004);

  console.log(
    `Ticket Service Running on Port ${process.env.PORT || 3004}`,
  );
}
//اجرای تابع 
bootstrap();