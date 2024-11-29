import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Pilar } from '../../pilares/pilar.entity';
import { Habilidade } from '../../habilidades/entities/habilidades.entity';

@Entity()
export class Competencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Pilar, (pilar) => pilar.competencias)
  pilar: Pilar;

  @OneToMany(() => Habilidade, (habilidade) => habilidade.competencia)
  habilidades: Habilidade[];
}
