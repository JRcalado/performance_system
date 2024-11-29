import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Competencia } from '../competencias/entities/competencias.entity';

@Entity()
export class Pilar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Competencia, (competencia) => competencia.pilar)
  competencias: Competencia[];
}
