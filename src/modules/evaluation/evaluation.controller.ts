
import { Controller, Get, Param } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';

@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Get('/colaborador/:id')
  async avaliarColaborador(@Param('id') id: number): Promise<any> {
    return this.evaluationService.calcularPesos(id);
  }

  @Get('/percentuais/colaborador/:id')
  async calcularPercentuais(@Param('id') id: number): Promise<any> {
    return this.evaluationService.calcularPercentuais(id);
  }

  @Get('/habilidades/abaixo/:id')
  async listarHabilidadesAbaixo(@Param('id') id: number): Promise<any> {
    return this.evaluationService.listarHabilidadesAbaixo(id);
  }

  @Get('/percentuais/pilar/:colaboradorId/:pilarId')
  async calcularPercentualPorPilar(
    @Param('colaboradorId') colaboradorId: number,
    @Param('pilarId') pilarId: number,
  ): Promise<any> {
    return this.evaluationService.calcularPercentualPorPilar(colaboradorId, pilarId);
  }

  @Get('/percentuais/competencia/:colaboradorId/:competenciaId')
  async calcularPercentualPorCompetencia(
    @Param('colaboradorId') colaboradorId: number,
    @Param('competenciaId') competenciaId: number,
  ): Promise<any> {
    return this.evaluationService.calcularPercentualPorCompetencia(colaboradorId, competenciaId);
  }
}
