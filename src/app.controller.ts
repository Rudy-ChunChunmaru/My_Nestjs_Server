import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('time')
  getTime(): JSON {
    return JSON.parse(JSON.stringify({ time: this.appService.getTime() }));
  }

  @Get('timestring')
  getTimeString(): string {
    return this.appService.getTime();
  }
}
