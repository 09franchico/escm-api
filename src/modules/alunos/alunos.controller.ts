import { Controller,Get,Post,Body, Param, Put } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { createAlunosDTO } from './dto/create-alunoDTO';
import { updateAlunoDTO } from './dto/update-alunoDTO';

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

    @Put('/:id')
    updateAluno(@Body() 
    data:updateAlunoDTO, 
    @Param('id') id:number){
        return this.alunoService.updateAluno(data,id)
    }
}
