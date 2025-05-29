import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EstudianteService } from './application/estudiante.service';


import { EstudiantePostgresRepository } from './infraestructure/estudiante.repository';
import { GradosPostgresRepository } from '../grados/infraestructure/grados.repository';
import { AsignaturasPostgresRepository } from '../asignaturas/infraestructure/asignaturas.repository';
import { CalificacionPostgresRepository } from '../calificaciones/infraestructure/calificaciones.repository';
import { PeriodoPostgresRepository } from '../periodo/infraestructure/periodo.repository';

import { EstudianteController } from './presentation/estudiante.controller';

import { EstudianteEntity } from 'src/infraestructure/database/entities/estudiantes/estudiantes.entity';
import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';
import { CalificacionEntity } from 'src/infraestructure/database/entities/calificaciones/calificaciones.entity';
import { PeriodoEntity } from 'src/infraestructure/database/entities/periodo/periodo.entity';

import { PROVIDE } from 'src/shared/constant/provide.constant';
import { CalificacionService } from '../calificaciones/application/calificaciones.service';


@Module({
  imports: [TypeOrmModule.forFeature([AsignaturaEntity, EstudianteEntity, CalificacionEntity, GradosEntity, PeriodoEntity])],
  providers: [
    {
      provide: PROVIDE.ESTUDIANTE,
      useClass: EstudiantePostgresRepository,
    },
    {
      provide: PROVIDE.GRADO,
      useClass: GradosPostgresRepository
    },
    {
      provide: PROVIDE.ASIGNATURA,
      useClass: AsignaturasPostgresRepository
    },
    {
      provide: PROVIDE.CALIFICACION,
      useClass: CalificacionPostgresRepository
    },
    {
      provide: PROVIDE.PERIODO,
      useClass: PeriodoPostgresRepository
    },
    EstudianteService,
    CalificacionService
  ],
  controllers: [EstudianteController],
  exports: [
    {
      provide: PROVIDE.ESTUDIANTE,
      useClass: EstudiantePostgresRepository,
    },
    {
      provide: PROVIDE.GRADO,
      useClass: GradosPostgresRepository
    },
    {
      provide: PROVIDE.ASIGNATURA,
      useClass: AsignaturasPostgresRepository
    },
    {
      provide: PROVIDE.CALIFICACION,
      useClass: CalificacionPostgresRepository
    },
    {
      provide: PROVIDE.PERIODO,
      useClass: PeriodoPostgresRepository
    },
    EstudianteService,
    CalificacionService

  ],
})
export class EstudianteModule { }
