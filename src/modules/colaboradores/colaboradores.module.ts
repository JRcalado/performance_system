import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradoresService } from './services/colaboradores.service';
import { ColaboradoresController } from './controllers/colaboradores.controller';
import { Colaborador } from './entities/colaboradores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  providers: [ColaboradoresService],
  controllers: [ColaboradoresController],
  exports: [ColaboradoresService],
})
export class ColaboradoresModule {}
