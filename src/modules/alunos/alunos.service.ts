import { updateAlunoDTO } from './dto/update-alunoDTO';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Alunos } from './entity/alunos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createAlunosDTO } from './dto/create-alunoDTO';
import { CustomError } from 'src/infra/CustomError';


@Injectable()
export class AlunosService {

    constructor(
        @InjectRepository(Alunos)
        private alunosRepository: Repository<Alunos>
    ) { }



    async findAll() {
        return await this.alunosRepository.find()
    }

    async createAluno(dados: createAlunosDTO) {
        const novoAluno = this.alunosRepository.create(dados);
        await this.alunosRepository.save(novoAluno);
        return novoAluno;
    }

    async finById(id: number) {
        const aluno = await this.alunosRepository.findOne({
            where: {
                id: id
            }
        })
        return aluno
    }

    async updateAluno(data: updateAlunoDTO, id: number) {

        const aluno = await this.alunosRepository.findOne({ where: { id: id } })
        if (!aluno) {
            throw new CustomError(400, "General", `Registro com ${id} não existe.`)
        }

        const alunoUpdate = await this.alunosRepository.update(id, data)
        if (!alunoUpdate) {
            throw new CustomError(400, "General", `Error ao realizar update`)
        }

        return await this.alunosRepository.findOne({ where: { id: id } })

    }
}
