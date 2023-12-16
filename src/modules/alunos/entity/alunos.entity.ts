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

  @Column()
  sexo: string;

  @Column()
  ativo: number;

  @Column()
  endereco: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  cep: string;

  @Column()
  celular: string;

  @Column()
  operadora: string;

  @Column()
  autorizado_sair_com: string;

  @Column()
  responsavel_carne: string;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;

}