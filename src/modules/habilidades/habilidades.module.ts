import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabilidadesService } from './services/habilidades.service';
import { HabilidadesController } from './controllers/habilidades.controller';
import { Habilidade } from './entities/habilidades.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habilidade])], // Registra a entidade Habilidade
  providers: [HabilidadesService],
  controllers: [HabilidadesController],
  exports: [HabilidadesService],
})
export class HabilidadesModule {}
