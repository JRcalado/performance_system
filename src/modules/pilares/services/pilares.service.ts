import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pilar } from '../entities/pilar.entity';
import { CreatePilarDto, UpdatePilarDto } from '../dto/pilar.dto';

@Injectable()
export class PilaresService {
  constructor(
    @InjectRepository(Pilar)
    private readonly pilarRepository: Repository<Pilar>,
  ) {}

  // Método para listar todos os pilares
  async findAll(): Promise<Pilar[]> {
    return this.pilarRepository.find();
  }

  // Método para criar um novo pilar
  async create(createPilarDto: CreatePilarDto): Promise<Pilar> {
    // Converta o DTO para a entidade Pilar
    const pilar = this.pilarRepository.create(createPilarDto);
    return this.pilarRepository.save(pilar);
  }

  // Método para buscar um pilar pelo ID
  async findOne(id: number): Promise<Pilar> {
    return this.pilarRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.pilarRepository.delete(id);
    return result.affected > 0; // Retorna true se ao menos 1 registro foi afetado
  }
  // Método para atualizar um pilar
  async update(id: number, updatePilarDto: UpdatePilarDto): Promise<Pilar> {
    // Verifique se o pilar existe
    const pilar = await this.pilarRepository.findOne({ where: { id } });
    if (!pilar) {
      throw new NotFoundException(`Pilar com ID ${id} não encontrado`);
    }

    // Atualize apenas os campos enviados no DTO
    Object.assign(pilar, updatePilarDto);

    // Salve as mudanças no banco de dados
    return this.pilarRepository.save(pilar);
  }
}
