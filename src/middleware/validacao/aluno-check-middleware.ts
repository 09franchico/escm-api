import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { createAlunosDTO } from "src/modules/alunos/dto/create-alunoDTO";


export class AlunoCheckMiddleware implements NestMiddleware {


    use(req: Request, res: Response, next: NextFunction) {

        console.log(req.body)
        next()
    }

}