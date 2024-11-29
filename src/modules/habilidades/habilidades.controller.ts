import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  Patch,
} from '@nestjs/common';
import { HabilidadesService } from './habilidades.service';
import {
  HabilidadesResponseDto,
  FindHabilidadesParamsDto,
  CreateHabilidadesDto,
  DeleteHabilidadesDto,
  UpdateHabilidadesDto,
} from './dto/habilidades.dto';

@Controller('habilidades')
export class HabilidadesController {
  constructor(private readonly habilidadesService: HabilidadesService) {}

  @Get()
  async findAll(): Promise<HabilidadesResponseDto[]> {
    const habilidades = await this.habilidadesService.findAll();
    return habilidades.map((habilidade) => ({
      id: habilidade.id,
      nome: habilidade.nome,
      nivel: habilidade.nivel,
      descricao: habilidade.descricao,
      competencia: habilidade.competencia.id,
    }));
  }

  @Get(':id')
  async findOne(
    @Param() params: FindHabilidadesParamsDto,
  ): Promise<HabilidadesResponseDto> {
    const habilidades = await this.habilidadesService.findOne(params.id);

    if (!habilidades) {
      throw new HttpException(
        'Habilidade não encontrada',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      id: habilidades.id,
      nome: habilidades.nome,
      nivel: habilidades.nivel,
      descricao: habilidades.descricao,
      competencia: habilidades.competencia.id,
    };
  }
  @Post()
  async create(
    @Body() createHabilidadesDto: CreateHabilidadesDto,
  ): Promise<HabilidadesResponseDto> {
    const habilidades =
      await this.habilidadesService.create(createHabilidadesDto);
    return {
      id: habilidades.id,
      nome: habilidades.nome,
      nivel: habilidades.nivel,
      descricao: habilidades.descricao,
      competencia: habilidades.competencia.id,
    };
  }

  @Delete(':id')
  async remove(@Param() params: DeleteHabilidadesDto): Promise<void> {
    return this.habilidadesService.remove(params.id);
  }

  @Patch(':id')
  async update(
    @Param() params: FindHabilidadesParamsDto,
    @Body() updateHabilidadesDto: UpdateHabilidadesDto,
  ): Promise<HabilidadesResponseDto> {
    const habilidades = await this.habilidadesService.update(
      params.id,
      updateHabilidadesDto,
    );

    if (!habilidades) {
      throw new HttpException(
        'Habilidades não encontrada para atualização',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      id: habilidades.id,
      nome: habilidades.nome,
      nivel: habilidades.nivel,
      descricao: habilidades.descricao,
      competencia: habilidades.competencia.id,
    };
  }
}
