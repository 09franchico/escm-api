import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario")
export class Usuario {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nome:string

    @Column()
    email:string

    @Column()
    senha:string

    @Column()
    ativo:number

    @Column()
    createAt:Date

    @Column()
    updateAt:Date

}