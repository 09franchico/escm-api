
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(
        private readonly reflector:Reflector
        ){}

    async canActivate(context: ExecutionContext) {

        const requiredRoles =  this.reflector.getAllAndOverride<Role[]>("roles",[context.getHandler(),context.getClass()])

        // Se não tiver nenhuma regra liberada a ROTA
        if(!requiredRoles){
            return true
        }


        const {usuario} = context.switchToHttp().getRequest();

        console.log(requiredRoles,usuario)

        return true
    }

}