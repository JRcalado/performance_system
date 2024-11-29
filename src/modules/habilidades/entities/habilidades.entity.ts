import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Competencia } from '../../competencias/entities/competencias.entity';

@Entity()
export class Habilidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string; // Novo campo para descrever a habilidade

  @Column({ type: 'int' })
  nivel: number;

  @ManyToOne(() => Competencia, (competencia) => competencia.habilidades)
  competencia: Competencia;
}
