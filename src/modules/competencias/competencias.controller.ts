import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CompetenciasService } from './competencias.service';
import { Competencia } from './competencias.entity';

@Controller('competencias')
export class CompetenciasController {
  constructor(private readonly competenciaService: CompetenciasService) {}

  @Get()
  async findAll(): Promise<Competencia[]> {
    return this.competenciaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Competencia> {
    return this.competenciaService.findOne(id);
  }

  @Post()
  async create(@Body() competencia: Competencia): Promise<Competencia> {
    return this.competenciaService.create(competencia);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.competenciaService.remove(id);
  }
}
