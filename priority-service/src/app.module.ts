import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PriorityModule } from './priority/priority.module';

@Module({
  imports: [
    DatabaseModule,
    PriorityModule,
  ],
})
export class AppModule {}