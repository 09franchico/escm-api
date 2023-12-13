import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './repository/usuario.repository';
import { CustomError } from 'src/infra/CustomError';
import { authPayload } from 'src/auth/dto/auth-payload';
import { createUsuarioDTO } from './dto/create-usuarioDTO';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsuarioService {

    constructor(
        private usuarioRepository:UsuarioRepository
        ){}

    /**
     * Busca todos os usuarios
     * @returns 
     */
    async findAll(){
        return await this.usuarioRepository.find()
    }


    /**
     * criar um usuario
     * @param usuario 
     * @returns 
     */
    async createUsuario(usuario:createUsuarioDTO){

        const emailExiste = await this.usuarioRepository.findOne({where:{email:usuario.email}})
        if(emailExiste){
            throw new CustomError(400,'General','Email já existe.')
        }

        const salt = await bcrypt.genSalt();

        usuario.senha = await bcrypt.hash(usuario.senha,salt)

        const createUsuario = this.usuarioRepository.create(usuario)

        return await this.usuarioRepository.save(createUsuario);


    }

    /**
     * Buscar o usuario pelo ID
     * @param id 
     * @returns 
     */
    async findUsuarioById(id:number){
        return this.usuarioRepository.findOne({
            where:{
                id
            }
        })
    }

    /**
     * Buscar o usuario por meail e senha
     * @param email 
     * @param senha 
     * @returns 
     */
    async login(email:string, senha:string){
        const user = await this.usuarioRepository.findOne({
            where:{
                email
            }
        })

        if(!user){
            throw new CustomError(401, "General", "Email / senha invalida.")
        }

       const senhaValidacao = await bcrypt.compare(senha,user.senha)

       if(!senhaValidacao){
            throw new CustomError(401, "General", "Email / senha invalida.")
        }

        return user;

    }


    /**
     * Verifica a conta do usuario pelo payload JWT
     * @param payload 
     * @returns 
     */
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
