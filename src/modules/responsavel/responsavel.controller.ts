import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Roles } from 'src/decorators/roles.decorators';
import { Role } from 'src/enums/role.enum';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { Responsavel } from './entity/responsavel.entity';
import { ResponsavelService } from './responsavel.service';


@UseGuards(AuthGuard,RoleGuard) //Autenticacao do token e validacao de permissão
@Roles(Role.Admin)
@Controller('responsavel')
export class ResponsavelController {


    constructor(private responsavelService:ResponsavelService){

    }

    @Get()
    buscarResponsavel(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('query') query,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10):Promise<Pagination<Responsavel>>{
            return this.responsavelService.findAll(page,limit,query)
            
    }

    @Post()
    criarResponsavel(@Body() dados:any){
        return null;
    }

    @Get('/:id')
    buscarAlunoById(@Param('id') id:number){
        return null;
    }

    @Put('/:id')
    updateAluno(@Body() data:any, @Param('id') id:number){
        return null;
    }

    @Delete('/:id')
    deleteAlunoById(@Param('id') id:number){
       return null;
    }
    
}
