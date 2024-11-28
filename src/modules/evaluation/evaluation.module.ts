
import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { HabilidadesModule } from '../habilidades/habilidades.module';
import { ColaboradoresModule } from '../colaboradores/colaboradores.module';

@Module({
  imports: [HabilidadesModule, ColaboradoresModule],
  providers: [EvaluationService],
  controllers: [EvaluationController],
})
export class EvaluationModule {}
