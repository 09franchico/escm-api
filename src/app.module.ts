import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AlunosModule } from './modules/alunos/alunos.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AlunosModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
