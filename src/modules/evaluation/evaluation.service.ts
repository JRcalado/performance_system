
import { Injectable } from '@nestjs/common';
import { HabilidadesService } from '../habilidades/habilidades.service';
import { ColaboradoresService } from '../colaboradores/colaboradores.service';

@Injectable()
export class EvaluationService {
  constructor(
    private readonly habilidadesService: HabilidadesService,
    private readonly colaboradoresService: ColaboradoresService,
  ) {}

  async calcularPesos(colaboradorId: number): Promise<any> {
    const colaborador = await this.colaboradoresService.findOne(colaboradorId);
    if (!colaborador) {
      throw new Error('Colaborador não encontrado.');
    }

    const habilidades = await this.habilidadesService.findAll();
    const avaliacoes = habilidades.map((habilidade) => {
      const peso = colaborador.nivel >= habilidade.nivel ? 1 : 0;
      return { ...habilidade, peso };
    });

    return avaliacoes;
  }

  async calcularPercentuais(colaboradorId: number): Promise<any> {
    const avaliacoes = await this.calcularPesos(colaboradorId);

    const totalHabilidades = avaliacoes.length;
    const habilidadesAtingidas = avaliacoes.filter((h) => h.peso === 1).length;

    const percentualGeral = (habilidadesAtingidas / totalHabilidades) * 100;

    return { percentualGeral, avaliacoes };
  }

  async listarHabilidadesAbaixo(colaboradorId: number): Promise<any> {
    const avaliacoes = await this.calcularPesos(colaboradorId);
    return avaliacoes.filter((habilidade) => habilidade.peso === 0);
  }

  async calcularPercentualPorPilar(colaboradorId: number, pilarId: number): Promise<any> {
    const avaliacoes = await this.calcularPesos(colaboradorId);
    const habilidadesPorPilar = avaliacoes.filter((habilidade) => habilidade.competencia.pilar.id === pilarId);

    const totalHabilidades = habilidadesPorPilar.length;
    const habilidadesAtingidas = habilidadesPorPilar.filter((h) => h.peso === 1).length;

    const percentual = (habilidadesAtingidas / totalHabilidades) * 100;

    return { pilarId, percentual, habilidades: habilidadesPorPilar };
  }

  async calcularPercentualPorCompetencia(colaboradorId: number, competenciaId: number): Promise<any> {
    const avaliacoes = await this.calcularPesos(colaboradorId);
    const habilidadesPorCompetencia = avaliacoes.filter((habilidade) => habilidade.competencia.id === competenciaId);

    const totalHabilidades = habilidadesPorCompetencia.length;
    const habilidadesAtingidas = habilidadesPorCompetencia.filter((h) => h.peso === 1).length;

    const percentual = (habilidadesAtingidas / totalHabilidades) * 100;

    return { competenciaId, percentual, habilidades: habilidadesPorCompetencia };
  }
}
