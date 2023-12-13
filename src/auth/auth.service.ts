import { UsuarioService } from 'src/modules/usuario/usuario.service';
import { Usuario } from 'src/modules/usuario/entity/usuario.entity';
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { CustomError } from 'src/infra/CustomError';
import { authPayload } from './dto/auth-payload';

@Injectable()
export class AuthService {

    private ISSUER = "API Nest escm"
    private AUDIENCE = "usuarios"

    constructor(
        private readonly jwtService: JwtService,
        private UsuarioService:UsuarioService) {}


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

    
    async authLogin(email:string, senha:string){
        const user = await this.UsuarioService.login(email,senha);
        return this.createToken(user)

    }
    
    async authAccount(payload:authPayload){
        const usuario = this.UsuarioService.account(payload);        
        return usuario;
    }

}