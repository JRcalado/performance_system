import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habilidade } from './habilidades.entity';

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

  async create(habilidade: Habilidade): Promise<Habilidade> {
    return this.habilidadeRepository.save(habilidade);
  }

  async remove(id: number): Promise<void> {
    const entity = await this.habilidadeRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
    await this.habilidadeRepository.remove(entity);
  }
}
