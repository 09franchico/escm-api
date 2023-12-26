import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Alunos } from 'src/modules/alunos/entity/alunos.entity';
import * as dotenv from 'dotenv'
import { Usuario } from 'src/modules/usuario/entity/usuario.entity';
import { Responsavel } from 'src/modules/responsavel/entity/responsavel.entity';

dotenv.config()

const CONFIG_DATABASE_MYSQL : TypeOrmModuleOptions = {
    type:'mysql',
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    entities:[Alunos,Usuario,Responsavel],
    synchronize: false
}

@Module({
    imports:[
        TypeOrmModule.forRoot(CONFIG_DATABASE_MYSQL)
    ]
})
export class DatabaseModule {}
