import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradoresService } from './colaboradores.service';
import { ColaboradoresController } from './colaboradores.controller';
import { Colaborador } from './colaboradores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  providers: [ColaboradoresService],
  controllers: [ColaboradoresController],
  exports: [ColaboradoresService],
})
export class ColaboradoresModule {}
