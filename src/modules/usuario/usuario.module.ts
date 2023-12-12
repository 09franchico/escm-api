import { forwardRef } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entity/usuario.entity';
import { UsuarioRepository } from './repository/usuario.repository';
import { AlunosModule } from '../alunos/alunos.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Usuario]),
    AlunosModule,
    forwardRef(()=>AuthModule) //resolver dependecia circular [UsuarioModule e AuthModule]
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService,UsuarioRepository],
  exports:[UsuarioRepository,UsuarioService]
})
export class UsuarioModule {}
