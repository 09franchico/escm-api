import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alunos } from './entity/alunos.entity';
import { AlunosService } from './alunos.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Alunos])
  ],
  controllers: [AlunosController],
  providers: [AlunosService]
})
export class AlunosModule {}