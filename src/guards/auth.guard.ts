import { AuthService } from './../auth/auth.service';
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const {authorization} = context.switchToHttp().getRequest().headers;

        const token = (authorization ?? '').split(' ')[1];

        const valido = this.authService.checkToken(token)

        return valido ? true : false


    }

}