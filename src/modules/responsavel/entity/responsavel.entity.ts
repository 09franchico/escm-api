import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("responsavel")
export class Responsavel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  rg: string;

  @Column()
  cpf: string;

  @Column()
  celular: string;

  @Column()
  operadora: string;

  @Column()
  data_nascimento: Date;

  @Column()
  sexo: string;

  @Column()
  ativo: number;

  @Column()
  parentesco: string;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;

}