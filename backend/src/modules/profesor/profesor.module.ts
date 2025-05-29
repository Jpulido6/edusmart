import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrearProfesorService } from './application/crear-profesor.service';
import { ProfesorPostgresRepository } from './infraestructure/profesor.repository';
import { ProfesorController } from './presentation/profesor.controller';
import { ProfesorEntity } from 'src/infraestructure/database/entities/profesor/profesor.entity';
import { PROVIDE } from 'src/shared/constant/provide.constant';
import { EventoEntity } from 'src/infraestructure/database/entities/eventos/eventos.entity';
import { EventoPostgresRepository } from '../eventos/infraestructure/eventos.repository';
@Module({
  imports: [TypeOrmModule.forFeature([ProfesorEntity, EventoEntity])],
  providers: [
    {
      provide: PROVIDE.PROFESOR,
      useClass: ProfesorPostgresRepository,
    },
    {
      provide: PROVIDE.EVENTO,
      useClass: EventoPostgresRepository,
    },
    CrearProfesorService,
  ],
  controllers: [ProfesorController],
  exports: [
    {
      provide: PROVIDE.PROFESOR,
      useClass: ProfesorPostgresRepository,
    },
    {
      provide: PROVIDE.EVENTO,
      useClass: EventoPostgresRepository,
    },
    CrearProfesorService,
  ],
})
export class ProfesorModule { }
