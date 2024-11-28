import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { HabilidadesService } from './habilidades.service';
import { Habilidade } from './habilidades.entity';

@Controller('habilidades')
export class HabilidadesController {
  constructor(private readonly habilidadesService: HabilidadesService) {}

  @Get()
  async findAll(): Promise<Habilidade[]> {
    return this.habilidadesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Habilidade> {
    return this.habilidadesService.findOne(id);
  }

  @Post()
  async create(@Body() habilidade: Habilidade): Promise<Habilidade> {
    return this.habilidadesService.create(habilidade);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.habilidadesService.remove(id);
  }
}
