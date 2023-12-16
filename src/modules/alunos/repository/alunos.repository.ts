import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Alunos } from "../entity/alunos.entity";
import { Pagination, paginate } from "nestjs-typeorm-paginate";

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
    async findAlunosByEmail(email:string)
    {
        const dado = await this.findOne({
            where:{
                email
            }
        })
        return dado;
    }

    /**
     * Realizar o filtro de buscar de alunos
     * @param page 
     * @param limit 
     * @param query 
     * @returns 
     */
    async findFiltroAluno(page: number, limit: number,query:string):Promise<Pagination<Alunos>>{
        const queryBuild =  this.createQueryBuilder('a');
        queryBuild.orderBy('a.id','DESC')
        queryBuild.where("  a.id                  Like :q",{ q:`%${query}%`})
        queryBuild.orWhere("a.nome                Like :q",{ q:`%${query}%`})
        queryBuild.orWhere("a.idade               Like :q",{ q:`%${query}%`})
        queryBuild.orWhere("a.email               Like :q",{ q:`%${query}%`})
        queryBuild.orWhere("a.celular             Like :q",{ q:`%${query}%`})
        queryBuild.orWhere("a.autorizado_sair_com Like :q",{ q:`%${query}%`})
        return paginate<Alunos>(queryBuild,{page,limit});
    }
}