import { AuthService } from './../auth/auth.service';
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const request = context.switchToHttp().getRequest();

        const {authorization} = request.headers

        try {

            const dado = this.authService.checkToken((authorization ?? '').split(' ')[1])

            request.tokenPayload = dado;

            return true;
            
        } catch (error) {
            return false
            
        }
    }

}