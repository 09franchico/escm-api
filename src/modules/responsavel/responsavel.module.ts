import { Module } from '@nestjs/common';
import { ResponsavelController } from './responsavel.controller';
import { ResponsavelService } from './responsavel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsavel } from './entity/responsavel.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { ResponsavelRepository } from './repository/ReponsavelRepository';

@Module({
  imports:[
    TypeOrmModule.forFeature([Responsavel]),
    AuthModule,
    UsuarioModule
  ],
  controllers: [ResponsavelController],
  providers: [ResponsavelService,ResponsavelRepository]
})
export class ResponsavelModule {}
