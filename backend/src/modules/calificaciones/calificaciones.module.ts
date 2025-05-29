import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CalificacionService } from './application/calificaciones.service';

import { CalificacionEntity } from 'src/infraestructure/database/entities/calificaciones/calificaciones.entity';
import { EstudianteEntity } from 'src/infraestructure/database/entities/estudiantes/estudiantes.entity';
import { PeriodoEntity } from 'src/infraestructure/database/entities/periodo/periodo.entity';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';

import { CalificacionController } from './presentation/calificaciones.controller';

import { CalificacionPostgresRepository } from './infraestructure/calificaciones.repository';
import { PeriodoPostgresRepository } from '../periodo/infraestructure/periodo.repository';
import { EstudiantePostgresRepository } from '../estudiantes/infraestructure/estudiante.repository';
import { AsignaturasPostgresRepository } from '../asignaturas/infraestructure/asignaturas.repository';

import { PROVIDE } from 'src/shared/constant/provide.constant';
import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsignaturaEntity,GradosEntity, CalificacionEntity, PeriodoEntity, EstudianteEntity])],
  providers: [
    {
      provide: PROVIDE.ASIGNATURA,
      useClass: AsignaturasPostgresRepository,
    },
    {
      provide: PROVIDE.ESTUDIANTE,
      useClass: EstudiantePostgresRepository,
    },
    {
      provide: PROVIDE.CALIFICACION,
      useClass: CalificacionPostgresRepository,
    },
    {
      provide: PROVIDE.PERIODO,
      useClass: PeriodoPostgresRepository,
    },
    CalificacionService,
  ],
  controllers: [CalificacionController],
  exports: [
    {
      provide: PROVIDE.ASIGNATURA,
      useClass: AsignaturasPostgresRepository,
    },
    {
      provide: PROVIDE.ESTUDIANTE,
      useClass: EstudiantePostgresRepository,
    },
    {
      provide: PROVIDE.CALIFICACION,
      useClass: CalificacionPostgresRepository,
    },
    {
      provide: PROVIDE.PERIODO,
      useClass: PeriodoPostgresRepository,
    },
    CalificacionService,
  ],
})
export class CalificacionesModule { }
