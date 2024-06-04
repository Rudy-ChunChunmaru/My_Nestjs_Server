import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTime(): string {
    return `${Date.now()}`;
  }
}
