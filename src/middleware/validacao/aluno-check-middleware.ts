import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { CustomError } from "src/infra/CustomError";
import { ErrorValidation } from "src/infra/types";
import { AlunosService } from "src/modules/alunos/alunos.service";


@Injectable()
export class AlunoCheckMiddleware implements NestMiddleware {

    constructor(private readonly alunoService:AlunosService){}


    /**
     * Validação do email de aluno
     * @param req 
     * @param res 
     * @param next 
     */
    async use(req: Request, res: Response, next: NextFunction) {

        const errorsValidation: ErrorValidation[] = [];

        const dado = req.body as any

        if(dado.email){
            let aluno = await this.alunoService.existeEmailAluno(dado.email)
            if(aluno){
                errorsValidation.push({ error:`${dado.email} já existe.` });
                throw new CustomError(400,'Validation','Email já existe.',null,null,errorsValidation)
            }
        }

        next()
    }

}