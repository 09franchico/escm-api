import { AuthGuard } from 'src/guards/auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Roles } from 'src/decorators/roles.decorators';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';

@UseGuards(AuthGuard,RoleGuard) //Autenticacao do token e validacao de permissão
@Roles(Role.Admin)
@Controller('usuario')
export class UsuarioController {

    constructor(
        private usuarioService:UsuarioService
        ){}


    @Get()
    findAll(){
       return this.usuarioService.findAll()
    }
}
