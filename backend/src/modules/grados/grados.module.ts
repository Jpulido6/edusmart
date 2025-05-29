import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';
import { GradosService } from './application/grados.service';
import { GradosController } from './presentation/grados.controller';
import { GradosPostgresRepository } from './infraestructure/grados.repository';
import { PROVIDE } from 'src/shared/constant/provide.constant';
@Module({
  imports: [TypeOrmModule.forFeature([GradosEntity])],
  providers: [
    {
      provide: PROVIDE.GRADO,
      useClass: GradosPostgresRepository,
    },
    GradosService,
  ],
  controllers: [GradosController],
  exports: [
    {
      provide: PROVIDE.GRADO,
      useClass: GradosPostgresRepository,
    },
    GradosService,
  ],
})
export class GradosModule {}
