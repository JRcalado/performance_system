import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  CreatePilarDto,
  FindPilarParamsDto,
  PilarResponseDto,
  UpdatePilarDto,
} from './dto/pilar.dto';
import { PilaresService } from './pilares.service';

@Controller('pilares')
export class PilarController {
  constructor(private readonly pilarService: PilaresService) {}

  // Rota para criar um novo pilar
  @Post()
  async create(
    @Body() createPilarDto: CreatePilarDto,
  ): Promise<PilarResponseDto> {
    const pilar = await this.pilarService.create(createPilarDto);
    return {
      id: pilar.id,
      nome: pilar.nome,
    };
  }
  @Get()
  async findAll(): Promise<PilarResponseDto[]> {
    const pilares = await this.pilarService.findAll();
    return pilares.map((pilar) => ({
      id: pilar.id,
      nome: pilar.nome,
    }));
  }
  // Rota para buscar um pilar pelo ID
  @Get(':id')
  async findOne(
    @Param() params: FindPilarParamsDto,
  ): Promise<PilarResponseDto> {
    const pilar = await this.pilarService.findOne(params.id);
    if (!pilar) {
      throw new HttpException('Pilar não encontrado', HttpStatus.NOT_FOUND);
    }
    return {
      id: pilar.id,
      nome: pilar.nome,
    };
  }

  // Rota para atualizar um pilar
  @Patch(':id')
  async update(
    @Param() params: FindPilarParamsDto,
    @Body() updatePilarDto: UpdatePilarDto,
  ): Promise<PilarResponseDto> {
    const pilar = await this.pilarService.update(params.id, updatePilarDto);
    if (!pilar) {
      throw new HttpException(
        'Pilar não encontrado para atualização',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      id: pilar.id,
      nome: pilar.nome,
    };
  }

  // Rota para deletar um pilar pelo ID
  @Delete(':id')
  async remove(
    @Param() params: FindPilarParamsDto,
  ): Promise<{ message: string }> {
    const result = await this.pilarService.remove(params.id);
    if (!result) {
      throw new HttpException(
        'Pilar não encontrado para exclusão',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: `Pilar com ID ${params.id} excluído com sucesso.` };
  }
}
