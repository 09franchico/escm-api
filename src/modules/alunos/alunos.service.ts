import { ErrorValidation } from './../../infra/types';
import { updateAlunoDTO } from './dto/update-alunoDTO';
import { Injectable } from '@nestjs/common';
import { createAlunosDTO } from './dto/create-alunoDTO';
import { CustomError } from 'src/infra/CustomError';
import { errorMessage } from 'src/infra/error/error-messagem';
import { AlunoRepository } from './repository/alunos.repository';


@Injectable()
export class AlunosService {

    constructor(
        private alunoRepository:AlunoRepository
    ) { }


    /**
     * Buscar todos os alunos
     * @returns 
     */
    async findAll() {
        this.alunoRepository.findAlunosByEmailAndIdade('francisco@gmail.com',26)
        return await this.alunoRepository.find()
    }

    /**
     * criar um aluno
     * @param dados 
     * @returns 
     */
    async createAluno(dados: createAlunosDTO) {
        const errorsValidation: ErrorValidation[] = [];
        const validacaoEmail = await this.alunoRepository.findOne({where:{email:dados.email}})
        
        if(validacaoEmail){
            errorsValidation.push({ error:`${dados.email} já existe.` });
            throw new CustomError(404, "General", "Email já existe",null,null,errorsValidation)
        }

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
}
