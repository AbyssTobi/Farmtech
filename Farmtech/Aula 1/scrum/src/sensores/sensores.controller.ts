import { Body, Controller, Get, Post } from '@nestjs/common';
import { SensoresService } from './sensores-service';
import { Sensores } from './sensores';

@Controller('sensores')
export class SensoresController {

  constructor(private sensoresService: SensoresService) {

  }


  @Get()
  getSensores(): Sensores[] {
    return this.sensoresService.listarSensores();
  }

  @Post()
  save(@Body() sensores: Sensores){
    this.sensoresService.salvar(sensores);
  }
}
