import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventoService } from './application/eventos.service';
import { EventoController } from './presentation/eventos.controller';

import { GradosEntity } from 'src/infraestructure/database/entities/grados/grados.entity';
import { EventoEntity } from 'src/infraestructure/database/entities/eventos/eventos.entity';

import { EventoPostgresRepository } from './infraestructure/eventos.repository';
import { GradosPostgresRepository } from '../grados/infraestructure/grados.repository';

import { PROVIDE } from 'src/shared/constant/provide.constant';

@Module({
  imports: [TypeOrmModule.forFeature([EventoEntity, GradosEntity])],
  providers: [
    {
      provide: PROVIDE.EVENTO,
      useClass: EventoPostgresRepository,
    },
    {
      provide: PROVIDE.GRADO,
      useClass: GradosPostgresRepository,
    },
    EventoService,
  ],
  controllers: [EventoController],
  exports: [
    {
      provide: PROVIDE.EVENTO,
      useClass: EventoPostgresRepository,
    },
    {
      provide: PROVIDE.GRADO,
      useClass: GradosPostgresRepository,
    },
    EventoService,
  ],
})
export class EventoModule { }
