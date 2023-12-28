import { Injectable } from '@nestjs/common';
import { ResponsavelRepository } from './repository/ReponsavelRepository';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Responsavel } from './entity/responsavel.entity';

@Injectable()
export class ResponsavelService {

    constructor(
        private responsavelRepository:ResponsavelRepository
    ) { }

    async findAll(page: number, limit: number,query:string):Promise<Pagination<Responsavel>> {
        return this.responsavelRepository.findFiltroAluno(page,limit,query);
        
    }
    
}
