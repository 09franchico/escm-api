import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alunos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  idade: number;
}