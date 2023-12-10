import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AlunosModule } from './modules/alunos/alunos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AlunosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
