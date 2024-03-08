import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return "funciona mesmo ok..OK";
  }

  @Get('/teste')
  getTest(): string {
    return "Testando um novo serviço";
  }
}
