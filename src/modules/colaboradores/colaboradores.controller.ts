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
import { ColaboradoresService } from './colaboradores.service';
import {
  ColaboradoresResponseDto,
  FindColaboradoresParamsDto,
  CreateColaboradoresDto,
  UpdateColaboradoresDto,
} from './dto/colaboradores.dto';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Get()
  async findAll(): Promise<ColaboradoresResponseDto[]> {
    const colaboradores = await this.colaboradoresService.findAll();
    return colaboradores.map((colaboradores) => ({
      id: colaboradores.id,
      nome: colaboradores.nome,
      nivel: colaboradores.nivel,
    }));
  }

  @Get(':id')
  async findOne(
    @Param() params: FindColaboradoresParamsDto,
  ): Promise<ColaboradoresResponseDto> {
    const colaborador = await this.colaboradoresService.findOne(params.id);
    if (!colaborador) {
      throw new HttpException(
        'Colaborador não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      id: colaborador.id,
      nome: colaborador.nome,
      nivel: colaborador.nivel,
    };
  }

  @Post()
  async create(
    @Body() createColaboradoresDto: CreateColaboradoresDto,
  ): Promise<CreateColaboradoresDto> {
    return this.colaboradoresService.create(createColaboradoresDto);
  }

  @Delete(':id')
  async remove(@Param() params: FindColaboradoresParamsDto): Promise<void> {
    return this.colaboradoresService.remove(params.id);
  }

  @Patch(':id')
  async update(
    @Param() params: FindColaboradoresParamsDto,
    @Body() updateColaboradoresDto: UpdateColaboradoresDto,
  ): Promise<ColaboradoresResponseDto> {
    const colaborador = await this.colaboradoresService.update(
      params.id,
      updateColaboradoresDto,
    );
    if (!colaborador) {
      throw new HttpException(
        'Pilar não encontrado para atualização',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      id: colaborador.id,
      nome: colaborador.nome,
      nivel: colaborador.nivel,
    };
  }
}
