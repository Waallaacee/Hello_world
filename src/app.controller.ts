import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/BSM')
  getBSM(): string {
    return this.appService.getBSM();
  }

  @Get('/aprender')
  getAprendizagem():string {
    return this.appService.getAprendizagem();
  }
}
