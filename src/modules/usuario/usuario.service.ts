import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './repository/usuario.repository';

@Injectable()
export class UsuarioService {

    constructor(
        private usuarioRepositiry:UsuarioRepository
        ){}

        
    async findAll(){
        return await this.usuarioRepositiry.find()
    }
}
