import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('usuario')
export class UsuarioController {

    constructor(
        private usuarioService:UsuarioService
        ){}

    @UseGuards(AuthGuard)
    @Get()
    findAll(){
       return this.usuarioService.findAll()
    }
}
