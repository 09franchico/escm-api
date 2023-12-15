import { Controller,Get,Post,Body, Param, Put, UseGuards, Query, DefaultValuePipe, ParseIntPipe, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { createAlunosDTO } from './dto/create-alunoDTO';
import { updateAlunoDTO } from './dto/update-alunoDTO';
import { Roles } from 'src/decorators/roles.decorators';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { Role } from 'src/enums/role.enum';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Alunos } from './entity/alunos.entity';


@UseGuards(AuthGuard,RoleGuard) //Autenticacao do token e validacao de permissão
@Roles(Role.Admin)
@Controller('alunos')
export class AlunosController {

    constructor(private alunoService:AlunosService){}

    @Get()
    buscarAlunos(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10):Promise<Pagination<Alunos>>{
        return this.alunoService.findAll(page,limit)
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

    @Delete('/:id')
    deleteAlunoById(@Param('id') id:number){
       return this.alunoService.delete(id)
    }
}
