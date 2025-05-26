import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionPostgresRepository } from './infraestructure/calificaciones.repository';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';
import { CalificacionController } from './presentation/calificaciones.controller';
import { CalificacionService } from './application/calificaciones.service';
@Module({
  imports: [TypeOrmModule.forFeature([AsignaturaEntity])],
  providers: [
    {
      provide: 'IAsignaturaRepository',
      useClass: CalificacionPostgresRepository,
    },
    {
      provide: 'ICalificacionRepository',
      useClass: CalificacionPostgresRepository,
    },
    {
      provide: 'IEstudiantesRepository',
      useClass: CalificacionPostgresRepository,
    },
    {
      provide: 'IPeriodoRepository',
      useClass: CalificacionPostgresRepository,
    },
    CalificacionService,
  ],
  controllers: [CalificacionController],
  exports: [
    {
      provide: 'IAsignaturaRepository',
      useClass: CalificacionPostgresRepository,
    },
    CalificacionService,
  ],
})
export class CalificacionesModule { }
