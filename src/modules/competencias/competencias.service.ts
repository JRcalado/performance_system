import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Competencia } from './competencias.entity';

@Injectable()
export class CompetenciasService {
  constructor(
    @InjectRepository(Competencia)
    private readonly competenciaRepository: Repository<Competencia>,
  ) {}

  async findAll(): Promise<Competencia[]> {
    return this.competenciaRepository.find({ relations: ['pilar'] });
  }

  async findOne(id: number): Promise<Competencia> {
    return this.competenciaRepository.findOne({
      where: { id },
      relations: ['pilar'],
    });
  }

  async create(competencia: Competencia): Promise<Competencia> {
    return this.competenciaRepository.save(competencia);
  }

  async remove(id: number): Promise<void> {
    const entity = await this.competenciaRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
    await this.competenciaRepository.remove(entity);
  }
}
