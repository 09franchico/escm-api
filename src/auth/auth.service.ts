import { Usuario } from 'src/modules/usuario/entity/usuario.entity';
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { CustomError } from 'src/infra/CustomError';
import { UsuarioRepository } from 'src/modules/usuario/repository/usuario.repository';

@Injectable()
export class AuthService {

    private ISSUER = "API Nest escm"
    private AUDIENCE = "usuarios"

    constructor(
        private readonly jwtService: JwtService,
        private usuarioRepository:UsuarioRepository) {}


    /**
     * Criação do token JWT
     * @param user 
     */
     createToken(user:Usuario) {
        return {
            token: this.jwtService.sign({
                sub:user.id,
                name:user.nome,
                email:user.email
            },{
                expiresIn:"7 days",
                //subject:String(user.id),
                issuer:this.ISSUER,
                audience:this.AUDIENCE
            })
        }
    

    }

    checkToken(token:string) {
        try {
            const dado =  this.jwtService.verify(token,{
                audience:this.AUDIENCE,
                issuer:this.ISSUER
            })
            return dado
        } catch (error) {
            throw new CustomError(400,'Unauthorized','Token invalido.',error)
        }

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

        return this.createToken(user)

    }

}