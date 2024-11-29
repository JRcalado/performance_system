import { Controller, Get, Param } from '@nestjs/common';
import { AvaliacaoService } from '../services/avaliacao.service';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Get('/colaborador/:id')
  async avaliarColaborador(@Param('id') id: number): Promise<any> {
    return this.avaliacaoService.calcularPesos(id);
  }

  @Get('/percentuais/colaborador/:id')
  async calcularPercentuais(@Param('id') id: number): Promise<any> {
    return this.avaliacaoService.calcularPercentuais(id);
  }

  @Get('/habilidades/abaixo/:id')
  async listarHabilidadesAbaixo(@Param('id') id: number): Promise<any> {
    return this.avaliacaoService.listarHabilidadesAbaixo(id);
  }

  @Get('/percentuais/pilar/:colaboradorId/:pilarId')
  async calcularPercentualPorPilar(
    @Param('colaboradorId') colaboradorId: number,
    @Param('pilarId') pilarId: number,
  ): Promise<any> {
    return this.avaliacaoService.calcularPercentualPorPilar(
      colaboradorId,
      pilarId,
    );
  }

  @Get('/percentuais/competencia/:colaboradorId/:competenciaId')
  async calcularPercentualPorCompetencia(
    @Param('colaboradorId') colaboradorId: number,
    @Param('competenciaId') competenciaId: number,
  ): Promise<any> {
    return this.avaliacaoService.calcularPercentualPorCompetencia(
      colaboradorId,
      competenciaId,
    );
  }
}
