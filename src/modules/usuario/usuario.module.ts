import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entity/usuario.entity';
import { UsuarioRepository } from './repository/usuario.repository';
import { AlunosModule } from '../alunos/alunos.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Usuario]),
    AlunosModule
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService,UsuarioRepository],
  exports:[UsuarioRepository,UsuarioService]
})
export class UsuarioModule {}
