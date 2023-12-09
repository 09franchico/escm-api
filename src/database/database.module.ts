import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { environments } from 'src/environments/environments';
import { Alunos } from 'src/modules/alunos/entity/alunos.entity';


const CONFIG_DATABASE_MYSQL : TypeOrmModuleOptions = {
    type:'mysql',
    host:environments.DB_HOST,
    port:environments.DB_PORT,
    username:environments.DB_USERNAME,
    password:environments.DB_PASSWORD,
    database:environments.DB_DATABASE,
    entities:[Alunos],
    synchronize:true
}

@Module({
    imports:[
        TypeOrmModule.forRoot(CONFIG_DATABASE_MYSQL)
    ]
})
export class DatabaseModule {}
