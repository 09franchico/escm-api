import { Controller,Get,Post,Body, Param } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { createAlunosDTO } from './dto/create-alunoDTO';

@Controller('alunos')
export class AlunosController {

    constructor(private alunoService:AlunosService){}

    @Get()
    buscarAlunos(){
        return this.alunoService.findAll()
    }

    @Post()
    criarAlunos(@Body() dados:createAlunosDTO){
        return this.alunoService.createAluno(dados)
    }

    @Get('/:id')
    buscarAlunoById(@Param('id') id:number){
        return this.alunoService.finById(id)
    }
}
