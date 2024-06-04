import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';

@Module({
  providers: [HistoryService],
  controllers: [],
})
export class HistoryModule {}
