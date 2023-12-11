import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Alunos } from "../entity/alunos.entity";

@Injectable()
export class AlunoRepository extends Repository<Alunos>
{
    constructor(private dataSource: DataSource)
    {
        super(Alunos, dataSource.createEntityManager());
    }

    /**
     * Buscar todos os alunos com email
     * @param email 
     * @returns 
     */
    async findAlunosByEmailAndIdade(email:string,idade:number)
    {
        const dado = await this.find({
            where:{
                email,
                idade
            }
        })
        return dado;
    }
}