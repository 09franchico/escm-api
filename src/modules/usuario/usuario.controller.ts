import { AuthGuard } from 'src/guards/auth.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Roles } from 'src/decorators/roles.decorators';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
import { createUsuarioDTO } from './dto/create-usuarioDTO';

@UseGuards(AuthGuard,RoleGuard) //Autenticacao do token e validacao de permissão
// @Roles(Role.Admin)
@Controller('usuario')
export class UsuarioController {

    constructor(
        private usuarioService:UsuarioService
        ){}


    @Get()
    findAll(){
       return this.usuarioService.findAll()
    }

    @Post()
    createUsuario(@Body() usuario:createUsuarioDTO){
       return this.usuarioService.createUsuario(usuario);
    }
}
