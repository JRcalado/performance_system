import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colaborador } from './colaboradores.entity';
import {
  CreateColaboradoresDto,
  UpdateColaboradoresDto,
} from './dto/colaboradores.dto';

@Injectable()
export class ColaboradoresService {
  constructor(
    @InjectRepository(Colaborador)
    private readonly colaboradorRepository: Repository<Colaborador>,
  ) {}

  async findAll(): Promise<Colaborador[]> {
    return this.colaboradorRepository.find();
  }

  async findOne(id: number): Promise<Colaborador> {
    return this.colaboradorRepository.findOne({ where: { id } });
  }

  async create(
    createColaboradoresDto: CreateColaboradoresDto,
  ): Promise<CreateColaboradoresDto> {
    return this.colaboradorRepository.save(createColaboradoresDto);
  }

  async remove(id: number): Promise<void> {
    const entity = await this.colaboradorRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
    await this.colaboradorRepository.remove(entity);
  }
  // Método para atualizar um pilar
  async update(
    id: number,
    updateColaboradoresDto: UpdateColaboradoresDto,
  ): Promise<Colaborador> {
    // Verifique se o pilar existe
    const colaborador = await this.colaboradorRepository.findOne({
      where: { id },
    });
    if (!colaborador) {
      throw new NotFoundException(`Colaborador com ID ${id} não encontrado`);
    }

    // Atualize apenas os campos enviados no DTO
    Object.assign(colaborador, updateColaboradoresDto);

    // Salve as mudanças no banco de dados
    return this.colaboradorRepository.save(colaborador);
  }
}
