import { Module } from '@nestjs/common';
import { ResponsavelController } from './responsavel.controller';
import { ResponsavelService } from './responsavel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsavel } from './entity/responsavel.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Responsavel])
  ],
  controllers: [ResponsavelController],
  providers: [ResponsavelService]
})
export class ResponsavelModule {}
