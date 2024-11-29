import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciasService } from './services/competencias.service';
import { CompetenciasController } from './controllers/competencias.controller';
import { Competencia } from './entities/competencias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competencia])],
  providers: [CompetenciasService],
  controllers: [CompetenciasController],
})
export class CompetenciasModule {}
