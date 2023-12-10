import { updateAlunoDTO } from './dto/update-alunoDTO';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Alunos } from './entity/alunos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createAlunosDTO } from './dto/create-alunoDTO';
import { CustomError } from 'src/infra/CustomError';
import { errorMessage } from 'src/infra/error/error-messagem';


@Injectable()
export class AlunosService {

    constructor(
        @InjectRepository(Alunos)
        private alunosRepository: Repository<Alunos>
    ) { }


    /**
     * Buscar todos os alunos
     * @returns 
     */
    async findAll() {
        return await this.alunosRepository.find()
    }

    /**
     * criar um aluno
     * @param dados 
     * @returns 
     */
    async createAluno(dados: createAlunosDTO) {
        const novoAluno = this.alunosRepository.create(dados);
        await this.alunosRepository.save(novoAluno);
        return novoAluno;
    }

    /**
     * Buscar aluno pelo ID
     * @param id 
     * @returns 
     */
    async finById(id: number) {
        const verificarAluno = await this.alunosRepository.findOne({where:{id:id}})
        if(!verificarAluno){
            throw new CustomError(404, "General", errorMessage.ERROR1,[`${id} não existe.`],)
        }
        const aluno = await this.alunosRepository.findOne({
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

        const aluno = await this.alunosRepository.findOne(
            {
                where:
                    { id: id }
            }
        )
        if (!aluno) {
            throw new CustomError(404, "General", errorMessage.ERROR1,[`${id} não existe.`])
        }

        const alunoUpdate = await this.alunosRepository.update(id, data)

        if (!alunoUpdate) {
            throw new CustomError(400, "General", errorMessage.ERROR2)
        }

        return await this.alunosRepository.findOne(
            {
                where:
                    { id: id }
            }
        )

    }
}
