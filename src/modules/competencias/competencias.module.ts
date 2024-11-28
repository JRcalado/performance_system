import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciasService } from './competencias.service';
import { CompetenciasController } from './competencias.controller';
import { Competencia } from './competencias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competencia])],
  providers: [CompetenciasService],
  controllers: [CompetenciasController],
})
export class CompetenciasModule {}
