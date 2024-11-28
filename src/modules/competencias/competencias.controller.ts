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
import { CompetenciasService } from './competencias.service';
import {
  CompetenciasResponseDto,
  FindCompetenciasParamsDto,
  CreateCompetenciasDto,
  UpdateCompetenciasDto,
} from './dto/competencias.dto';

@Controller('competencias')
export class CompetenciasController {
  constructor(private readonly competenciaService: CompetenciasService) {}

  @Get()
  async findAll(): Promise<CompetenciasResponseDto[]> {
    const competencias = await this.competenciaService.findAll();
    return competencias.map((competencia) => ({
      id: competencia.id,
      nome: competencia.nome,
      pilar: competencia.pilar as unknown as number,
    }));
  }

  @Get(':id')
  async findOne(
    @Param() params: FindCompetenciasParamsDto,
  ): Promise<CompetenciasResponseDto> {
    const competencia = await this.competenciaService.findOne(params.id);
    if (!competencia) {
      throw new HttpException(
        'Competencia não encontrada',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      id: competencia.id,
      nome: competencia.nome,
      pilar: competencia.pilar as unknown as number,
    };
  }
  @Post()
  async create(
    @Body() createCompetenciasDto: CreateCompetenciasDto,
  ): Promise<CompetenciasResponseDto> {
    const competencia = await this.competenciaService.create(
      createCompetenciasDto,
    );
    return {
      id: competencia.id,
      nome: competencia.nome,
      pilar: competencia.pilar as unknown as number,
    };
  }

  @Delete(':id')
  async remove(@Param() params: FindCompetenciasParamsDto): Promise<void> {
    return this.competenciaService.remove(params.id);
  }

  @Patch(':id')
  async update(
    @Param() params: FindCompetenciasParamsDto,
    @Body() updateCompetenciasDto: UpdateCompetenciasDto,
  ): Promise<CompetenciasResponseDto> {
    const competencia = await this.competenciaService.update(
      params.id,
      updateCompetenciasDto,
    );
    if (!competencia) {
      throw new HttpException(
        'Competencia não encontrada para atualização',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      id: competencia.id,
      nome: competencia.nome,
      pilar: competencia.pilar as unknown as number,
    };
  }
}
