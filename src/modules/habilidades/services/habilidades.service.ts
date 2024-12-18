import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habilidade } from '../entities/habilidades.entity';
import {
  CreateHabilidadesDto,
  UpdateHabilidadesDto,
} from '../dto/habilidades.dto';

@Injectable()
export class HabilidadesService {
  constructor(
    @InjectRepository(Habilidade)
    private readonly habilidadeRepository: Repository<Habilidade>,
  ) {}

  async findAll(): Promise<Habilidade[]> {
    return this.habilidadeRepository.find({ relations: ['competencia'] });
  }

  async findOne(id: number): Promise<Habilidade> {
    return this.habilidadeRepository.findOne({
      where: { id },
      relations: ['competencia'],
    });
  }

  async create(
    createHabilidadesDto: CreateHabilidadesDto,
  ): Promise<Habilidade> {
    const habilidade = this.habilidadeRepository.create({
      ...createHabilidadesDto,
      competencia: { id: createHabilidadesDto.competencia },
    });
    const habilidadeRetorno = this.habilidadeRepository.save(habilidade);

    if (!habilidadeRetorno) {
      throw new Error('Erro ao criar habilidade');
    }
    return habilidadeRetorno;
  }

  async remove(id: number): Promise<void> {
    const entity = await this.habilidadeRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
    await this.habilidadeRepository.remove(entity);
  }

  async update(
    id: number,
    updateHabilidadesDto: UpdateHabilidadesDto,
  ): Promise<Habilidade> {
    const habilidade = await this.habilidadeRepository.findOneBy({ id });
    if (!habilidade) {
      throw new NotFoundException(`Habilidade with ID ${id} not found`);
    }
    const updatedHabilidade = {
      ...habilidade,
      ...updateHabilidadesDto,
      competencia: { id: updateHabilidadesDto.competencia },
    };
    return this.habilidadeRepository.save(updatedHabilidade);
  }
}
