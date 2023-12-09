import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Alunos } from './entity/alunos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createAlunosDTO } from './dto/create-alunoDTO';


@Injectable()
export class AlunosService {

    constructor(
        @InjectRepository(Alunos)
        private alunosRepository:Repository<Alunos>
        ){}



    async findAll(){
        return await this.alunosRepository.find()
    }

    async createAluno(dados:createAlunosDTO){
        const novoAluno = this.alunosRepository.create(dados);
        await this.alunosRepository.save(novoAluno);
        return novoAluno;
    }

    async finById(id:number){
        const aluno = await this.alunosRepository.findOne({
            where:{
                id:id
            }
        })
        return aluno
    }
}
