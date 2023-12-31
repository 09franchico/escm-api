
import { updateAlunoDTO } from './dto/update-alunoDTO';
import { Injectable } from '@nestjs/common';
import { createAlunosDTO } from './dto/create-alunoDTO';
import { CustomError } from 'src/infra/CustomError';
import { errorMessage } from 'src/infra/error/error-messagem';
import { AlunoRepository } from './repository/alunos.repository';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Alunos } from './entity/alunos.entity';


@Injectable()
export class AlunosService {

    constructor(
        private alunoRepository:AlunoRepository
    ) { }


    /**
     * Buscar todos os alunos / filtro
     * @returns 
     */
    async findAll(page: number, limit: number,query:string):Promise<Pagination<Alunos>> {
        return this.alunoRepository.findFiltroAluno(page,limit,query);
        
    }

    /**
     * criar um aluno
     * @param dados 
     * @returns 
     */
    async createAluno(dados: createAlunosDTO) {
        const novoAluno = this.alunoRepository.create(dados);
        await this.alunoRepository.save(novoAluno);
        return novoAluno;
    }

    /**
     * Buscar aluno pelo ID
     * @param id 
     * @returns 
     */
    async finById(id: number) {
        const verificarAluno = await this.alunoRepository.findOne({where:{id:id}})
        if(!verificarAluno){
            throw new CustomError(404, "General", errorMessage.ERROR1,[`${id} não existe.`],)
        }
        const aluno = await this.alunoRepository.findOne({
            where: {
                id: id
            }
        })
        return aluno
    }

    /**
     * Update de aluno
     * @param data
     * @param id 
     * @returns 
     */
    async updateAluno(data: updateAlunoDTO, id: number) {

        const aluno = await this.alunoRepository.findOne(
            {
                where:
                    { id: id }
            }
        )
        if (!aluno) {
            throw new CustomError(404, "General", errorMessage.ERROR1,[`${id} não existe.`])
        }

        const alunoUpdate = await this.alunoRepository.update(id, data)

        if (!alunoUpdate) {
            throw new CustomError(400, "General", errorMessage.ERROR2)
        }

        return await this.alunoRepository.findOne(
            {
                where:
                    { id: id }
            }
        )

    }


    async delete(id:number){
       const aluno = await this.alunoRepository.findOne({where:{id}})
       if(!aluno){
         throw new CustomError(404,'General','Aluno não existe')
       }
       this.alunoRepository.delete(id)

    }

    async existeEmailAluno(email:string){
        return this.alunoRepository.findAlunosByEmail(email);
    }
}
