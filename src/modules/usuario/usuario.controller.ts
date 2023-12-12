import { AuthGuard } from 'src/guards/auth.guard';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Roles } from 'src/decorators/roles.decorators';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';

@UseGuards(AuthGuard,RoleGuard)
@Controller('usuario')
export class UsuarioController {

    constructor(
        private usuarioService:UsuarioService
        ){}


    @Roles(Role.Admin)
    @Get()
    findAll(){
       return this.usuarioService.findAll()
    }
}
