import { AuthService } from './../auth/auth.service';
import { CanActivate, ExecutionContext, Inject, Injectable, forwardRef } from "@nestjs/common";
import { authPayload } from 'src/auth/dto/auth-payload';
import { UsuarioService } from 'src/modules/usuario/usuario.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        //@Inject(forwardRef(()=>AuthService))
        private readonly authService:AuthService,
        private readonly usuarioService:UsuarioService){}

    async canActivate(context: ExecutionContext) {

        const request = context.switchToHttp().getRequest();
        const {authorization} = request.headers

        try {

            //Pega o payload do token
            const dado:authPayload = this.authService.checkToken((authorization ?? '').split(' ')[1])

            request.tokenPayload = dado;

            request.usuario = await this.usuarioService.findUsuarioById(dado.sub)

            return true;
            
        } catch (error) {
            return false
            
        }
    }

}