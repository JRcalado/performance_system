import { Module } from '@nestjs/common';
import { AvaliacaoService } from './services/avaliacao.service';
import { AvaliacaoController } from './controllers/avaliacao.controller';
import { HabilidadesModule } from '../habilidades/habilidades.module';
import { ColaboradoresModule } from '../colaboradores/colaboradores.module';

@Module({
  imports: [HabilidadesModule, ColaboradoresModule],
  providers: [AvaliacaoService],
  controllers: [AvaliacaoController],
})
export class AvaliacaoModule {}
