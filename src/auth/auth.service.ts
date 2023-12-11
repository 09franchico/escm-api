import { Usuario } from 'src/modules/usuario/entity/usuario.entity';
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomError } from 'src/infra/CustomError';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,

        @InjectRepository(Usuario)
        private usuarioRepository:Repository<Usuario>) {}


    async createToken() {

    }

    async checkToken() {

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

        return user

    }

}