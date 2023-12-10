import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

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
