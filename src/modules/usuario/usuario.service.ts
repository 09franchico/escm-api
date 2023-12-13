import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './repository/usuario.repository';
import { CustomError } from 'src/infra/CustomError';
import { authPayload } from 'src/auth/dto/auth-payload';

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

    async login(email:string, senha:string){
        const user = await this.usuarioRepository.findOne({
            where:{
                email,
                senha
            }
        })

        if(!user){
            throw new CustomError(401, "General", "Usuario não encontrado")
        }

        return user;

    }

    async account(payload:authPayload){
        const usuario = this.usuarioRepository.findOne({
            where:{
                id:payload.sub
            }
        })

        ;(await usuario).senha = null;
        
        return usuario;
    }
}
