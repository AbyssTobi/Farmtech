import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensoresController } from './sensores/sensores.controller';
import { SensoresService } from './sensores/sensores-service';

@Module({
  imports: [],
  controllers: [AppController, SensoresController],
  providers: [AppService, SensoresService],
})
export class AppModule {}
