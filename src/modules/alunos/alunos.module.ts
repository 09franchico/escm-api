import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alunos } from './entity/alunos.entity';
import { AlunosService } from './alunos.service';
import { AlunoCheckMiddleware } from 'src/middleware/validacao/aluno-check-middleware';
import { AlunoRepository } from './repository/alunos.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([Alunos])
  ],
  controllers: [AlunosController],
  providers: [AlunosService,AlunoRepository]
})
export class AlunosModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
     consumer.apply(AlunoCheckMiddleware).forRoutes({
      path:'/alunos',
      method:RequestMethod.POST
     })
  }
}
