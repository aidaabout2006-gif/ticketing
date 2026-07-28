import { Module } from '@nestjs/common';
// اتصال دیتابیس به برنامه 
import { DatabaseModule } from './database/database.module';
//مدیریت تیکت ها 
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    DatabaseModule,
    TicketModule,
  ],
})
export class AppModule {}