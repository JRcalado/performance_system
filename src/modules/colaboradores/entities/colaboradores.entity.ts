import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('colaboradores')
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'int' })
  nivel: number;
}
