import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './entity/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepositiry:Repository<Usuario>
        ){}

        
    async findAll(){
        return await this.usuarioRepositiry.find()
    }
}
