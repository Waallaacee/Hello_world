import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/C')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/B')
  getBSM(): string {
    return this.appService.getBSM();
  }
  @Get('/A')
  getListaDeConteudo(): string {
    return this.appService.getListaDeConteudo();
  }
}
