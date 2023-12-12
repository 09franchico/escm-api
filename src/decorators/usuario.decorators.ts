import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { CustomError } from "src/infra/CustomError";

export const Usuario = createParamDecorator((filter:string , context:ExecutionContext)=>{
    
    const request = context.switchToHttp().getRequest();

    if(request.usuario){
        if(filter){
            return request.usuario[filter]
        }else{
          return request.usuario
        }
    }else{
        throw new CustomError(403,'Unauthorized','Usuario nao encontrado no request, user o AuthGuard na rota')
    }

})