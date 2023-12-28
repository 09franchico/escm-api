import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Responsavel } from "../entity/responsavel.entity";
import { Pagination, paginate } from "nestjs-typeorm-paginate";

@Injectable()
export class ResponsavelRepository extends Repository<Responsavel>
{
    constructor(private dataSource: DataSource)
    {
        super(Responsavel, dataSource.createEntityManager());
    }


    async findFiltroAluno(page: number, limit: number,query:string):Promise<Pagination<Responsavel>>{
        const queryBuild =  this.createQueryBuilder('a');
        queryBuild.orderBy('a.id','DESC')
        queryBuild.where("  a.id                  Like :q",{ q:`%${query}%`})
        return paginate<Responsavel>(queryBuild,{page,limit});
    }

    

}