import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AsignaturasPostgresRepository } from './infraestructure/asignaturas.repository';
import { AsignaturaEntity } from 'src/infraestructure/database/entities/asignaturas/asignaturas.entity';
import { AsignaturasService } from './application/asignaturas.service';
import { AsignaturasController } from './presentation/asignaturas.controller';

import { PROVIDE } from 'src/shared/constant/provide.constant';
@Module({
  imports: [TypeOrmModule.forFeature([AsignaturaEntity])],
  providers: [
    {
      provide: PROVIDE.ASIGNATURA,
      useClass: AsignaturasPostgresRepository,
    },
    AsignaturasService,
  ],
  controllers: [AsignaturasController],
  exports: [
    {
      provide: PROVIDE.ASIGNATURA,
      useClass: AsignaturasPostgresRepository,
    },
    AsignaturasService,
  ],
})
export class AsignaturasModule {}
