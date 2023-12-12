import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './repository/usuario.repository';

@Injectable()
export class UsuarioService {

    constructor(
        private usuarioRepository:UsuarioRepository
        ){}

        
    async findAll(){
        return await this.usuarioRepository.find()
    }

    async findUsuarioById(id:number){
        return this.usuarioRepository.findOne({
            where:{
                id
            }
        })
    }
}
