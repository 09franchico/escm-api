import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Usuario } from "../entity/usuario.entity";

@Injectable()
export class UsuarioRepository extends Repository<Usuario>
{
    constructor(private dataSource: DataSource)
    {
        super(Usuario, dataSource.createEntityManager());
    }

}