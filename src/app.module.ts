import { Module, forwardRef } from '@nestjs/common';
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
    forwardRef(()=>AlunosModule),
    forwardRef(()=>AuthModule),
    forwardRef(()=>UsuarioModule)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
