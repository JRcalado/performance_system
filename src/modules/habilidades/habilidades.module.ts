import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabilidadesService } from './habilidades.service';
import { HabilidadesController } from './habilidades.controller';
import { Habilidade } from './habilidades.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habilidade])], // Registra a entidade Habilidade
  providers: [HabilidadesService],
  controllers: [HabilidadesController],
  exports: [HabilidadesService],
})
export class HabilidadesModule {}