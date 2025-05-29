import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { periodoController } from './presentation/periodo.controller';
import { PeriodoService } from './application/periodo.service';
import { PeriodoPostgresRepository } from './infraestructure/periodo.repository';

import { PeriodoEntity } from 'src/infraestructure/database/entities/periodo/periodo.entity';
import { CalificacionEntity } from 'src/infraestructure/database/entities/calificaciones/calificaciones.entity';

import { PROVIDE } from 'src/shared/constant/provide.constant';
import { CalificacionPostgresRepository } from '../calificaciones/infraestructure/calificaciones.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PeriodoEntity, CalificacionEntity])],
  providers: [
    {
      provide: PROVIDE.PERIODO,
      useClass: PeriodoPostgresRepository,
    },
    {
      provide: PROVIDE.CALIFICACION,
      useClass: CalificacionPostgresRepository,
    },
    PeriodoService,
  ],
  controllers: [periodoController],
  exports: [
    {
      provide: PROVIDE.PERIODO,
      useClass: PeriodoPostgresRepository,
    },
    {
      provide: PROVIDE.CALIFICACION,
      useClass: CalificacionPostgresRepository,
    },
    PeriodoService,
  ],
})
export class PeriodoModule { }
