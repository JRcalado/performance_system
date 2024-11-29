import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Competencia } from '../entities/competencias.entity';
import {
  CreateCompetenciasDto,
  UpdateCompetenciasDto,
} from '../dto/competencias.dto';

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
    });
  }

  async create(
    createCompetenciesDto: CreateCompetenciasDto,
  ): Promise<Competencia> {
    const competencia = this.competenciaRepository.create({
      nome: createCompetenciesDto.nome,
      pilar: { id: createCompetenciesDto.pilar },
    });
    return this.competenciaRepository.save(competencia);
  }

  async remove(id: number): Promise<void> {
    const entity = await this.competenciaRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
    await this.competenciaRepository.remove(entity);
  }

  async update(
    id: number,
    updateCompetenciasDto: UpdateCompetenciasDto,
  ): Promise<Competencia> {
    // Verifique se o pilar existe
    const competencias = await this.competenciaRepository.findOne({
      where: { id },
    });
    if (!competencias) {
      throw new NotFoundException(`Competencias com ID ${id} não encontrado`);
    }

    // Atualize apenas os campos enviados no DTO
    Object.assign(competencias, updateCompetenciasDto);

    // Salve as mudanças no banco de dados
    return this.competenciaRepository.save(competencias);
  }
}
